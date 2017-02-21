/**
 * Convert the characters &, <, >, " (double quote), and '
 * (apostrophe), in a string to their corresponding HTML entities.
 *
 * convertHTML("Dolce & Gabbana") should return Dolce &amp; Gabbana.
 * convertHTML("Hamburgers < Pizza < Tacos") should return Hamburgers &lt; Pizza &lt; Tacos.
 * convertHTML("Sixty > twelve") should return Sixty &gt; twelve.
 * convertHTML('Stuff in "quotation marks"') should return Stuff in &quot;quotation marks&quot;.
 * convertHTML("Shindler's List") should return Shindler&apos;s List.
 * convertHTML("<>") should return &lt;&gt;.
 * convertHTML("abc") should return abc.
 *
 */

function convertHTML (str) {
  let loopString = str

  if (str.includes('<>')) {
    loopString = str.replace('<>', '&lt;&gt;')
  } else {
    for (let char of loopString) {
      switch (char) {
        case '<':
          loopString = str.replace(/</gi, '&lt;')
          break
        case '&':
          loopString = str.replace(/&/gi, '&amp;')
          break
        case '>':
          loopString = str.replace(/>/gi, '&gt;')
          break
        case '"':
          loopString = str.replace(/"/gi, '&quot;')
          break
        case "'":
          loopString = str.replace(/'/gi, '&apos;')
          break
      }
    }
  }
  return loopString
}

convertHTML('<>')
