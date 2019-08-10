import React, {PureComponent} from 'react'

class Article extends PureComponent {
  state = {
    someState: false
  }

  constructor(props) {
    super(props)
    console.log('old method named componentWillMount')
  }

  static getDerivedStateFromProps(props, states) {
    console.log('getDerivedStateFromProps')
    return {}
  }

  render() {
    const {article, isOpen, onButtonClick} = this.props
    const body = this.props.isOpen && <section className="card-text">{article.text}</section>

    return (
        <div className="card mx-auto" style={{width: '50%'}}>
          <div className="card-header">
            <h2>
              {article.title}
              <button className="btn btn-primary btn-lg float-right" onClick={onButtonClick}>
                {isOpen ? 'close' : 'open'}
              </button>
            </h2>
          </div>
          <div className="card-body">
            <h6 className="card-subtitle text-muted">
              creation date: {(new Date(article.date)).toDateString()}
            </h6>
            {body}
          </div>
        </div>
    )
  }
}


export default Article