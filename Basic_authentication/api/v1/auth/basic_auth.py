#!/usr/bin/env python3
"""BasicAuth Class for API Authentication
"""
from api.v1.auth.auth import Auth


class BasicAuth(Auth):
    """ BAsic Authentication Class"""

    def extract_base64_authorization_header(self,
                                            authorization_header: str) -> str:
        """Extract the Base64 part of the Authorization header
        Args:
            authorization_header (str): The Authorization header
        Returns:
            str: The Base64-encoded part of the header, or None
        """
        # Return None if authorization_header is None
        if authorization_header is None:
            return None

        # Return None if authorization_header is not a string
        if not isinstance(authorization_header, str):
            return None

        # Return None if authorization_header doesn't start with "Basic "
        if not authorization_header.startswith("Basic "):
            return None

        # Return the value after "Basic " (after the space)
        return authorization_header.split(" ")[1]
        # Split the authorization_header by spaces (" ")
        # and return the second part (index 1),
        # which is the Base64-encoded string.

    def decode_base64_authorization_header(self,
                                           base64_authorization_header: str
                                           ) -> str:
        """ Decode a Base64 string
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
            return decoded_bytes.decode('utf-8')
        except Exception:
            # Return None If decoding fails
            return None
