function TodoList({lists, deleteThing, setComplete, itemStyle}) {
  
  return (
    <>
      {/* 事项列表 */}
      <ul>
        {lists.length == 0 && <h2><br/><br/>暂无待办事项</h2>}
        { lists.map((item, index) => (
          <li key={index}>
            <div className="list">
              <input type="checkbox" checked={item.isComplete} onChange={() => setComplete(index)}/>
              <p style={itemStyle(item.isComplete)}>{item.thing}</p>
              <button onClick={() => deleteThing(index)}>删除</button>
            </div>
            <hr />
          </li>
        ))}
      </ul>
    </>
  )
}

export default TodoList