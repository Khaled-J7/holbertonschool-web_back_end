#!/usr/bin/env python3
"""
filtered_logger.py
"""

import re
from typing import List


def filter_datum(fields: List[str], redaction: str, message: str, separator: str) -> str:
    """
    Obfuscates specified fields in a log message.

    Args:
        fields (List[str]): List of fields to obfuscate.
        redaction (str): String to replace sensitive data with.
        message (str): Log line to process.
        separator (str): Character separating fields in the log line.

    Returns:
        str: The obfuscated log message.
    """
    # Create a regex pattern to match fields to obfuscate
    pattern = f"({'|'.join(fields)})=[^{separator}]*"

    # Use re.sub to replace matched fields with the redaction string
    return re.sub(pattern, lambda match: f"{match.group(1)}={redaction}", message)