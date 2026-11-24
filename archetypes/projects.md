---
title: "{{ replace .File.ContentBaseName "-" " " | title }}"
slug: "{{ .File.ContentBaseName }}"   # used for the #anchor and the home-page `ls` entry
weight: 100                          # lower = higher on the page
description: >-
  One sentence. Only claims you can point to in the repo.
labels: []                           # e.g. ["pytorch", "cuda"]
github: "https://github.com/Ad-B-R/REPO"
# links:                             # optional extra links
#   - name: "report.pdf"
#     url: "https://..."
---
