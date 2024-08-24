function TodoInput({addThing, setThing, thing}) {

  return (
    <>
      {/* 输入框 */}
      <div className="input">
        <span>待办事项：</span>
        <input type="text" placeholder='请输入待办事项' value={thing} onChange={(e) => { setThing(e.target.value)}}/>
        <button onClick={() => addThing() }>新增</button>
      </div><br/><hr/>
    </>
  )
}

export default TodoInput