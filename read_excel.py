import pandas as pd

try:
    xls = pd.ExcelFile('c:\\antigravity.aismartwork\\조직도 및 업무분장.xlsx')
    for sheet in xls.sheet_names:
        print(f"--- Sheet: {sheet} ---")
        df = pd.read_excel(xls, sheet_name=sheet)
        print(df.to_string())
except Exception as e:
    print(f"Error: {e}")
