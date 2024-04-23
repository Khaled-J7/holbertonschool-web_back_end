#!/usr/bin/env python3

"""
Write a type-annotated function sum_mixed_list
which takes a list mxd_lst of integers
and floats and returns their sum as a float.
"""

from typing import List


def sum_mixed_list(mxd_lst: List[float | int]) -> float:
    """ Calculate the sum of a mixed list of integers and
    floats and return the result as a float. """
    return sum(mxd_lst)
