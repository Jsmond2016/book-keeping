import * as React from 'react'
import { Link } from 'react-router-dom'
import './index.scss'
import Layout from '../../components/layout'
import Button from '../../components/button'
import Center from '../../components/center'
import Space from '../../components/space'
import Icon from '../../components/icon'
import useTags from '../../hooks/useTags'



const Tags: React.FunctionComponent = () => {

  const { tags, addTag } = useTags()

  return (
    <React.Fragment>
      <Layout>
        <div className="tag-list">
          {tags.map(tag =>
              <li key={tag.id}>
                <Link to={`/tags/${tag.id}`}>
                  <span className="one-line">{tag.name}</span>
                  <Icon name="right"/>
                </Link>
              </li>
            )}
        </div>
        <Center>
          <Space />
          <Button onClick={addTag}>新增标签</Button>
        </Center>
      </Layout>
    </React.Fragment>
  )
}

export default Tags

