import "./filters.css"

export default function Filters({setFilter,filter,theme}){
    return <div className="filters" style={theme === "dark"? {backgroundColor:"#25273d",boxShadow:"0 35px 50px -15px rgba(0, 0, 0, 0.5)"}:{}}>
        <p className={filter === "all"?"active-filter text":"text"} onClick={() => setFilter('all')}>All</p>
        <p className={filter === "active"?"active-filter text":"text"} onClick={() => setFilter('active')}>Active</p>
        <p className={filter === "completed"?"active-filter text":"text"} onClick={() => setFilter('completed')}>Completed</p>
    </div>
}