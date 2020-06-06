import React from 'react'

function Article(props) {
  return (
    <div style={{ backgroundColor: '#b0ffc0', borderRadius: 8, padding: 12, margin: 12, width: 'max-content' }}>
      <a href={props.link} style={{ textDecoration: 'none' }}>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        <p>{props.date}</p>
      </a>
    </div>
  )
}

export default class Blogs extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tableData: []
    }
  }

  async componentDidMount() {
    const notionTableData = await fetch(
      "https://notion-api.splitbee.io/v1/table/4a900f47ce9143b59695cf25d8461893"
    ).then(res => res.json());

    this.setState({ tableData: notionTableData.filter(blog => blog.status === 'live') })
  }

  render() {
    return (
      <div>
        {this.state.tableData.map((blog, index) => {
          return (
            <Article
              title={blog.title}
              description={blog.description}
              date={blog.date}
              link={'/blog/' + blog.slug}
              key={index}
            />
          )
        })}
      </div>
    )
  }
}
