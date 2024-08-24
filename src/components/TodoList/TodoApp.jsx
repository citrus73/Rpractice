import TodoInput from "./TodoInput"
import TodoList from "./TodoList"
import { useEffect, useState } from "react"

function TodoApp() {
  const [lists, setLists] = useState(JSON.parse(sessionStorage.getItem('things') || '[]'))

  // 设置sessionStorage
  useEffect(() => {
    sessionStorage.setItem('things', JSON.stringify(lists))
  }, [lists])

  // 增加待办事项
  const [thing, setThing] = useState('')
  const addThing = () => {
    if (thing) {
      setLists([
        {
          thing,
          isComplete: false
        },
        ...lists,
      ])
      setThing('')
    } else {
      alert('请添加待办')
    }
  }

  // 删除待办事项
  const deleteThing = (i) => {
    setLists(lists.filter((item, index) => index !== i))
  }

  // 改变isComplete状态
  const setComplete = (i) => {
    setLists(lists.map((item, index) => {
      if(index === i){
        return{
          ...item,
          isComplete: !item.isComplete
        }
      }
      return item
    }))
  }

  // 定义itemStyle函数
  const itemStyle = (isComplete) => {
    return {
      color: isComplete ? '#aaa' : 'black', // 设置字体颜色
      textDecoration: isComplete ? 'line-through' : 'none' // 给已完成项添加删除线
    };
  };

  return (
    <>
      <h1>Todo List</h1>
      <TodoInput addThing={addThing} setThing={setThing} thing={thing}></TodoInput>
      <TodoList lists={lists} deleteThing={deleteThing} setComplete={setComplete} itemStyle={itemStyle}></TodoList>
    </>
  )
}

export default TodoApp