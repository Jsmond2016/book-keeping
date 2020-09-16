import React, { ChangeEventHandler } from 'react'
import {useParams, useHistory} from 'react-router-dom'
import './index.scss'
import useTags from '../../hooks/useTags'
import Layout from '../../components/layout'
import Icon from '../../components/icon'
import Button from '../../components/button'
import Input from '../../components/input'
import Center from '../../components/center'
import Space from '../../components/space'

type TParams = {
  tagId: string
}

const Tag: React.FC = () => {
  const {findTag, updateTags, deleteTag} = useTags()
  const {tagId} = useParams<TParams>()

  const tag = findTag(parseInt(tagId))

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    updateTags(tag!.id, {name: e.target.value})
  }

  const history = useHistory()
  const onClickBack = () => {
    history.goBack()
  }

  return (
    <Layout>
      <div className="topbar">
        <Icon name="left-copy" onClick={onClickBack}/>
        <span>编辑标签</span>
        <Icon/>
      </div>
      {
        tag ?
        <div>
          <div className="input-wrapper">
            <Input
              label="标签名"
              type="text"
              onChange={onChange}
              value={tag!.name}
              placeholder="标签名"
            />
          </div>
          <Space/>
          <Center>
            <Button onClick={() => {
              deleteTag(tag!.id)
              window.history.back()
            }}>删除标签</Button>
          </Center>
        </div> : <Center>不存在</Center>
      }
    </Layout>
  )
}

export default Tag
