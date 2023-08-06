import os
import sys
import time
import re

group_name = ''
scan_dir = '.'
if len(sys.argv) > 1:
    scan_dir = sys.argv[1]

if len(sys.argv) > 2:
    group_name = sys.argv[2]
else:
    groupname_match = re.search(r"^docs/(.+?)/?$", os.path.relpath(os.path.join(scan_dir, ''), 'src'))
    if groupname_match:
        group_name = groupname_match.group(1)

files = os.listdir(scan_dir)  
files = [f for f in files if os.path.isfile(os.path.join(scan_dir, f)) and f.endswith('.md') and f != 'index.md']
files = sorted(files)
# files.sort(key=lambda f: os.path.getctime(os.path.join(scan_dir, f)))  

md_content = '# %s\n\n' % (group_name)

for f in files:
    ctime_str = time.strftime('%Y-%m-%d %H:%M:%S', time.localtime(os.path.getctime(os.path.join(scan_dir, f))))
    f = f.replace('.md', '')
    filepath_link = '/' + os.path.relpath(os.path.join(scan_dir, f), 'src') + '.html'
    md_content += '- [%s【%s】](%s)\n' % (f, ctime_str, filepath_link)

with open(os.path.join(scan_dir, 'index.md'), 'w') as f:
    f.write(md_content)