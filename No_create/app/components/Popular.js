import React from 'react'

export default class Popular extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedLanguage: 'All'   //initial state value
            }
        this.updateLanguage = this.updateLanguage.bind(this)
        }
        updateLanguage(selectedLanguage) {
            this.setState({                        //when update laguage is called , re-render DOM and paint it with new items in set state
                selectedLanguage
            })
        }
  render() {
    const languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python']
    return (
      <ul className='flex-center'>
        {languages.map((language) => (
          <li key={language}>
            <button 
            className='btn-clear nav-link'
            style={language === this.state.selectedLanguage ? { color:'rgb(187, 46, 31)'} : null}
            onClick={() => this.updateLanguage(language)}>
            {language}
            </button>
          </li>
        ))}
      </ul>
    )
  }
}