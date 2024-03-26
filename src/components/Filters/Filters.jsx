import "./filters.css"

export default function Filters({setFilter}){
    return <div className="filters">
        <p className="text" onClick={() => setFilter('all')}>All</p>
        <p className="text" onClick={() => setFilter('active')}>Active</p>
        <p className="text" onClick={() => setFilter('completed')}>Completed</p>
    </div>
}