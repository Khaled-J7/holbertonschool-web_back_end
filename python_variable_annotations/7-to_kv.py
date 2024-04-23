#!/usr/bin/env python3

"""
Complex types - string and int/float to tuple
"""

from typing import List, Tuple


def to_kv(k: str, v: int | float) -> Tuple[str, float]:
    """ Takes a string k and an int or float v as arguments and returns a tuple. """
    return (k, float(v) ** 2)
