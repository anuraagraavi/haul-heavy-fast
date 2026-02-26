# HeavyTowPro — Google Ads Project

> **Version:** v2 GKP Enhanced · **Last updated:** 2026-02-23

Bay Area towing company Google Ads campaign — complete strategy, ad copy, landing pages, and import-ready campaign files for two campaigns across 22 ad groups and 223 keywords.

---

## Folder Structure

| Folder | What's inside | When to use |
|---|---|---|
| `Research/` | Company analysis (Phase 1) + market & buyer psychology (Phase 2) | Background context, positioning, USPs |
| `Keywords/` | Full keyword research (Phase 3 v2) + original GKP exports | Keyword strategy, CPCs, match types |
| `Landing Pages/` | LP copy for C1 (light/medium) + C2 (heavy duty), v2 with GKP updates | Building or editing the landing pages |
| `Ad Copy/` | All RSA headlines, descriptions, callouts, sitelinks, structured snippets + negative keyword list | Setting up or editing ad assets |
| `Campaign Import/` | Google Ads Editor import files (xlsx + csv) | Importing into Google Ads Editor |
| `Dev Context/` | Cursor AI build prompts + master context + all markdown files | Handing off to Cursor AI / developer |

---

## Quick Start — Google Ads Import

1. Open **Google Ads Editor** → your HeavyTowPro account
2. File → Import → `Campaign Import/HeavyTowPro_1_Campaigns.csv`
3. Review preview (expect: 2 campaigns · 22 ad groups · 22 RSAs · 223 keywords)
4. File → Import → `Campaign Import/HeavyTowPro_2_Negative_Keywords.csv`
5. Manually add extensions from `Ad Copy/Phase5_v2_GKP_Updated.docx` (sitelinks, callouts, structured snippets)
6. Set Max CPCs from `Campaign Import/HeavyTowPro_GoogleAds_BulkUpload.xlsx` → CPC Reference tab
7. Verify landing pages are live, conversion tracking is active
8. Enable campaigns

Both campaigns import as **Paused** — nothing spends until you enable them.

---

## Quick Start — Cursor AI / Developer

Drop these files into Cursor:
```
Dev Context/HeavyTowPro_Master_Context.md      ← start here
Dev Context/HeavyTowPro_Cursor_Prompts.md      ← build sequence
Landing Pages/HeavyTowPro_LP_Light_Medium_Duty.md
Landing Pages/HeavyTowPro_LP_Heavy_Duty.md
Ad Copy/HeavyTowPro_Ad_Copy_Extensions.md
```

---

## Campaign Summary

| | C1 | C2 |
|---|---|---|
| Name | HeavyTowPro - C1 Light & Medium Duty Towing | HeavyTowPro - C2 Heavy Duty & Commercial |
| URL | https://www.heavytowpro.com/towing | https://www.heavytowpro.com/heavy-duty |
| Ad groups | 12 | 10 |
| Keywords | 129 | 94 |
| Status | Paused | Paused |
| Bid strategy | Maximize clicks | Maximize clicks |

**Phone:** 650-881-2400 · **Certifications:** CTTA · ITRA · DOT · OSHA

---

> Note: The `_Archive (Delete These)/` folder contains outdated v1 files — safe to delete.
