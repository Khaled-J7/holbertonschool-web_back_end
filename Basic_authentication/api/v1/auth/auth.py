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
        return False

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