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
        """Retrieve a User instance based on email and password"""
        if user_email is None or not isinstance(user_email, str):
            return None
        if user_pwd is None or not isinstance(user_pwd, str):
            return None
        try:
            users = User.search({"email": user_email})
        except Exception:
            return None
        if not users:
            return None
        user = users[0]
        if not user.is_valid_password(user_pwd):
            return None
        return user

    def current_user(self, request=None) -> TypeVar("User"):
        """Retrieve the User instance for a request
        Args:
            request (flask.Request): The Flask request object
        Returns:
            User: The authenticated User instance, or None
        """
        # Step 1: Extract the Authorization header
        auth_header = self.authorization_header(request)
        if not auth_header:
            return None

        # Step 2: Extract the Base64-encoded part of the header
        base64_part = self.extract_base64_authorization_header(auth_header)
        if not base64_part:
            return None

        # Step 3: Decode the Base64 string
        decoded_credentials = self.decode_base64_authorization_header(
            base64_part
        )
        if not decoded_credentials:
            return None

        # Step 4: Extract the email and password
        user_email, user_pwd = self.extract_user_credentials(
            decoded_credentials
        )
        if not user_email or not user_pwd:
            return None

        # Step 5: Retrieve the User instance
        user = self.user_object_from_credentials(user_email, user_pwd)
        return user
