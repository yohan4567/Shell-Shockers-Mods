let credits = document.createElement('div')

let link = document.createElement('a')
link.href = 'https://github.com/AgentAdam5972/'
link.target = '_blank'
link.className = 'f_col f_center ss_marginright bg_blue4'

let wrapper = document.createElement('div')
wrapper.className = 'icon-wrap roundme_sm'
wrapper.style.backgroundColor = '#5b6ffa'

let text = document.createElement('span')
text.className = 'sr-only'
text.innerText = 'Vist the Mod Developer\'s Github'

let icon = document.createElement('i')
icon.ariaHidden = 'true'
icon.className = 'text_blue1 fab fa-github'

wrapper.appendChild(text)

wrapper.appendChild(icon)

link.appendChild(wrapper)

credits.appendChild(link)
