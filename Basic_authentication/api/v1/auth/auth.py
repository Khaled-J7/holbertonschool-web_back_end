#!/usr/bin/env python3
""" Auth class for API authentication
"""
from flask import request
from typing import List, TypeVar


class Auth:
    """ Template for all authentication systems """

    def require_auth(self, path: str, excluded_paths: List[str]) -> bool:
        """ Check if authentication is required for a given path
        Args:
            path (str): The requested path
            excluded_paths (List[str]): Paths that don't require authentication
        Returns:
            bool: False (for now)
        """
        # Return True if path is None
        if path is None:
            return True

        # Returns True if excluded_paths is None or empty
        if excluded_paths is None or len(excluded_paths) == 0:
            return True

        # Check if path is in excluded_paths
        for excluded_path in excluded_paths:
            if not path.endswith('/'):
                excluded_path += '/'
            if path == excluded_path:
                return False

        # Ensure path ends with a '/' for slash tolerance
        if not path.endswith('/'):
            path += '/'

        # If no match found, return True
        return True

    def authorization_header(self, request=None) -> str:
        """ Get the authorization header from the request
        Args:
            request (flask.Request): The Flask request object
        Returns:
            str: None (for now)
        """
        return None

    def current_user(self, request=None) -> TypeVar('User'):
        """ Get the current user from the request
        Args:
            request (flask.Request): The Flask request object
        Returns:
            TypeVar('User'): None (for now)
        """
        return None
