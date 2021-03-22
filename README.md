# PMD Source Code Analyzer Action

This action allows to use PMD Source Code Analyzer from GitHub Actions

## Example usage

```yaml
name: PMD Source Code Analyzer on Push

on: [push]

jobs:
  pmd:
  
    runs-on: ubuntu-latest
    
    steps:
      - uses: sfdx-actions/setup-pmd@v1
        with:
          pmd-version: '6.32.0'
      - name: run-pmd
        run: pmd -d ./force-app/main/default/classes -R category/apex/design.xml -f text
```

## License
```
MIT License

Copyright (c) 2019 Felipe Echanique Torres (felipe.echanique at gmail.com)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
