import os
import sys
import time

scan_dir = '.'
if len(sys.argv) > 1:
    scan_dir = sys.argv[1]

files = os.listdir(scan_dir)  
files = [f for f in files if os.path.isfile(os.path.join(scan_dir, f)) and f.endswith('.md') and f != 'index.md']

files.sort(key=lambda f: os.path.getctime(os.path.join(scan_dir, f)))  

md_content = '\n'

for f in files:
    ctime_str = time.strftime('%Y-%m-%d %H:%M:%S', time.localtime(os.path.getctime(os.path.join(scan_dir, f))))
    f = f.replace('.md', '')
    filepath_link = '/' + os.path.relpath(os.path.join(scan_dir, f), '') + '.html'
    md_content += '- [%s【%s】](%s)\n' % (f, ctime_str, filepath_link)

with open(os.path.join(scan_dir, 'index.md'), 'w') as f:
    f.write(md_content)