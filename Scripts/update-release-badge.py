"""Render the README badge from the newest supported SwiftPM version tag."""
from pathlib import Path
import re
import subprocess

root = Path(__file__).resolve().parents[1]
tags = subprocess.check_output(["git", "tag", "--list"], cwd=root, text=True).splitlines()
versions = {}
for tag in tags:
    match = re.fullmatch(r"(\d+)\.(\d+)\.(\d+)(?:-(alpha|beta|rc)\.(\d+))?", tag)
    if match:
        major, minor, patch, stage, sequence = match.groups()
        rank = {"alpha": 0, "beta": 1, "rc": 2, None: 3}[stage]
        versions[(int(major), int(minor), int(patch), rank, int(sequence or 0))] = tag
version = versions[max(versions)]
value_width = len(version) * 7 + 12
width = 48 + value_width
svg = f'''<svg xmlns="http://www.w3.org/2000/svg" width="{width}" height="20" role="img" aria-label="Release {version}">
  <title>Release {version}</title>
  <clipPath id="round"><rect width="{width}" height="20" rx="3"/></clipPath>
  <g clip-path="url(#round)">
    <rect width="48" height="20" fill="#555"/>
    <rect x="48" width="{value_width}" height="20" fill="#007ec6"/>
  </g>
  <g fill="#fff" font-family="Verdana,DejaVu Sans,sans-serif" font-size="11" text-anchor="middle">
    <text x="24" y="14">release</text>
    <text x="{48 + value_width / 2:g}" y="14">{version}</text>
  </g>
</svg>
'''
(root / "docs/images/release.svg").write_text(svg)
