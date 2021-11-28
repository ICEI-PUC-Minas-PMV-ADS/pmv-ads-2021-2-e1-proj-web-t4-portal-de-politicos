const Candidato = [
    {
        id: 1,
        name: 'Alex junio',
        partido: 'PUC',
        voto: 'Sim'
    },
    {   
        id: 2,
        name: 'Sheila Gomes',
        partido: 'PUC',
        voto: 'Sim'
    },
    {   
        id: 3,
        name: 'Paulo Santos',
        partido: 'PO',
        voto: 'Não'
    },
    {   
        id: 4,
        name: 'João Carlos',
        partido: 'PO',
        voto: 'Sim'
    },
    {
        id: 5,
        name: 'Alexandre Carlos',
        partido: 'PUC',
        voto: 'Não'

    }
  ]
  
  const input = document.querySelector('.input-busca')
  const list  = document.querySelector('.ul-busca')
  
  const onKeyUp = (event) => {
    const minimumChars = 2
    let selectedname = ''

  
    if (event.target.value.length >= minimumChars) {
  
        Candidato.map((Candidato) => {
        if (Candidato.name.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase())) {
          selectedname += `<li data-name="${Candidato.name}"data-id="${Candidato.id}">${Candidato.name}</li>`
          
          
        }
      })
  
    } else {
      list.innerHTML = ''
    }
    
    list.innerHTML = selectedname
  
    const dataname = document.querySelectorAll('[data-name]')

    const onClick = (event) => {
      
    }
  
    Array.from(dataname).map((li) => {
      li.addEventListener('click', onClick)
    })
  }
  
  input.addEventListener('keyup', onKeyUp)

  /* 
  



  */