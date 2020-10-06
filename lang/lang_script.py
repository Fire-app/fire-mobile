# NOTES:
# run `python3 lang_script.py` on the command line to generate language files
# keep in mind that there might be keys in the english file that are NOT in the csv,
#     which would get overwritten with the json generation
# remember to open generated files and save to prettier and pass eslint


# pandas need to be locally installed
import pandas as pd

# you can clean up the csv file with pd.fillna("str") or pd.replace("str", "new_str")
# and such but it's easier to clean up in Google Sheets

# assuming no clean up necessary and lang.csv in directory
lang = pd.read_csv("lang.csv")

# setting index to column "Key", which contains the json keys
lang['Key'] = lang['Key'].str.strip()
lang = lang.set_index("Key")

# isolating each language by column
en = lang["English"].str.strip()
es = lang["Spanish"].str.strip()
zh = lang["Chinese"].str.strip()
tl = lang["Tagalog"].str.strip()
ko = lang["Korean"].str.strip()

# deleting rows that contain "empty_value"
en = en[~en.str.contains("empty_value")]
es = es[~es.str.contains("empty_value")]
zh = zh[~zh.str.contains("empty_value")]
tl = tl[~tl.str.contains("empty_value")]
ko = ko[~ko.str.contains("empty_value")]

# exporting to json files
en.to_json(path_or_buf="en.json", orient="columns")
es.to_json(path_or_buf="es.json", orient="columns")
zh.to_json(path_or_buf="zh.json", orient="columns")
tl.to_json(path_or_buf="tl.json", orient="columns")
ko.to_json(path_or_buf="ko.json", orient="columns")
