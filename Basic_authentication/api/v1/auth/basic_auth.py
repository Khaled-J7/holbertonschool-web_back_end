#!/usr/bin/env python3
""" BasicAuth class for API authentication
"""
from api.v1.auth.auth import Auth
import base64


class BasicAuth(Auth):
    """Basic Authentication class"""

    def extract_base64_authorization_header(self,
                                            authorization_header: str) -> str:
        """Extract the Base64 part of the Authorization header"""
        if authorization_header is None or not isinstance(authorization_header,
                                                          str):
            return None
        if not authorization_header.startswith("Basic "):
            return None
        return authorization_header.split(" ")[1]

    def decode_base64_authorization_header(
        self, base64_authorization_header: str
    ) -> str:
        """Decode a Base64 string
        Args:
            base64_authorization_header (str): The Base64-encoded string
        Returns:
            str: The decoded value as a UTF-8 string, or None
        """
        # Return None if base64_authorization_header is None
        if base64_authorization_header is None:
            return None

        # Return None if base64_authorization_header is not a string
        if not isinstance(base64_authorization_header, str):
            return None

        try:
            # Decode the Base64 string
            decoded_bytes = base64.b64decode(base64_authorization_header)
            # Convert the bytes to a UTF-8 string
            return decoded_bytes.decode("utf-8")
        except Exception:
            # Return None if decoding fails
            return None

    def extract_user_credentials(self,
                                 decoded_base64_authorization_header:
                                     str) -> (str, str):
        """ Extract user email and password from the decoded Base64 string
        Args:
            decoded_base64_authorization_header (str):
            The decoded Base64 string
        Returns:
            tuple: (user_email, user_password),
            or (None, None)
        """
        # Return None, None if decoded_base64_authorization_header is None
        if decoded_base64_authorization_header is None:
            return None, None

        # Return None, None
        # if decoded_base64_authorization_header is not a string
        if not isinstance(decoded_base64_authorization_header,
                          str):
            return None, None

        # Return None, None
        # if decoded_base64_authorization_header doesn’t contain :
        if ":" not in decoded_base64_authorization_header:
            return None, None

        # Split the string at the first : and return the two parts
        user_email, user_password = decoded_base64_authorization_header.split(
            ":", 1)
        return user_email, user_password
