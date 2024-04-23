#!/usr/bin/env python3
""" Multiplier """

from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """
    Creates a function that multiplies a number by a given multiplier.
    """
    return multiplier_function(multiplier)


def multiplier_function(n: float):
    """
    Multiplies a number by the given multiplier.
    """
    return lambda x: x * n
