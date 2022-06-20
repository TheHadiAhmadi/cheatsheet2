import './style.css'

import data from './data.json'

function escape(str) {
  return [...str].map(s => {
    if(s === '>') return '&gt;'
    if(s === '<') return '&lt;'
    return s
  }).join('')
}
function examples(exs) {
  return `<ul>
    ${exs.map(ex => `<li>${ex.content}</li>`).join('')}
  </ul>`
}
function examplesCode(exs) {
  return `<ul>
    ${exs.map(ex => `<li><pre class="reset"><code>${escape(ex.content)}</code></pre></li>`).join('')}
  </ul>`
}


function printRow(tag) {
  console.log(tag)
  console.log(tag.name, tag.attributes)
  return `
  <tr><td rowspan="${tag.attributes.length+1}">${tag.tag}</td>
  ${tag.attributes.map(attr => {
    return `<tr>
          <td class="col-attr-name">${attr.name}</td>
          <td class="col-attr-code">${examplesCode(attr.examples)}</td>
          <td class="col-attr-example">${examples(attr.examples)}</td>
        </tr>`
      }).join('')
      }
      </tr>`
}
console.log(printRow(data[1]))


console.log('here')
document.querySelector('#table-body').innerHTML = data.map(tag => {
  return printRow(tag)
}).join('')

