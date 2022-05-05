function TodoFooter ({todos,onCompleted}){
   const completedSize = todos.filter((todo)=>todo.isCompleted).length;
    return (
       <div>
           <span>{completedSize}/{todos.length} Completed</span>
           <button onClick={onCompleted}>Clear Completed</button>
       </div>
   )
}
export default TodoFooter;