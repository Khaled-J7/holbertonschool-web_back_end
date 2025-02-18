#!/usr/bin/env python3
""" BasicAuth class for API authentication
"""
from api.v1.auth.auth import Auth
import base64
from models.user import User
from typing import TypeVar


class BasicAuth(Auth):
    """Basic Authentication class"""

    def extract_base64_authorization_header(
        self, authorization_header: str
    ) -> str:
        """Extract the Base64 part of the Authorization header"""
        if authorization_header is None or not isinstance(
            authorization_header, str
        ):
            return None
        if not authorization_header.startswith("Basic "):
            return None
        return authorization_header.split(" ")[1]

    def decode_base64_authorization_header(
        self, base64_authorization_header: str
    ) -> str:
        """Decode a Base64 string"""
        if base64_authorization_header is None or not isinstance(
            base64_authorization_header, str
        ):
            return None
        try:
            decoded_bytes = base64.b64decode(base64_authorization_header)
            return decoded_bytes.decode("utf-8")
        except Exception:
            return None

    def extract_user_credentials(
        self, decoded_base64_authorization_header: str
    ) -> (str, str):
        """Extract user email and password from the decoded Base64 string"""
        if decoded_base64_authorization_header is None:
            return None, None
        if not isinstance(decoded_base64_authorization_header, str):
            return None, None
        if ":" not in decoded_base64_authorization_header:
            return None, None
        user_email, user_password = decoded_base64_authorization_header.split(
            ":", 1
        )
        return user_email, user_password

    def user_object_from_credentials(
        self, user_email: str, user_pwd: str
    ) -> TypeVar("User"):
        """Retrieve a User instance based on email and password
        Args:
            user_email (str): The user's email
            user_pwd (str): The user's password
        Returns:
            User: The matching User instance, or None
        """
        # Return None if user_email is None or not a string
        if user_email is None or not isinstance(user_email, str):
            return None

        # Return None if user_pwd is None or not a string
        if user_pwd is None or not isinstance(user_pwd, str):
            return None

        # Search for users with the given email
        try:
            users = User.search({"email": user_email})
        except Exception:
            return None

        # Return None if no user is found
        if not users:
            return None

        # Validate the password for the first matching user
        user = users[0]
        if not user.is_valid_password(user_pwd):
            return None

        # Return the matching User instance
        return user
