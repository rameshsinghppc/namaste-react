// const heading = React.createElement('h1', {
//     id: "heading"
// }, 'Hello World From React!')
// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(heading)


{/* <div id="parent">
    <div id="child">
        <h1 id="heading">
            It's h1 tag
        </h1>
        <h1 id="heading">
            It's h1 tag
        </h1>
    </div>
    <div id="child">
        <h1 id="heading">
            It's h1 tag
        </h1>
        <h1 id="heading">
            It's h1 tag
        </h1>
    </div>
</div> */}


const section = React.createElement('div', {
    id: "parent"
}, [React.createElement('div', {
    id: "child1"
},
    [
        React.createElement('h1', { id: "heading" }, `It's h1 tag child1`),
        React.createElement('h1', { id: "heading" }, `It's h1 tag child1`),
        React.createElement('h1', { id: "heading" }, `It's h1 tag child1`),
        React.createElement('h1', { id: "heading" }, `It's h1 tag child1`),
        React.createElement('h1', { id: "heading" }, `It's h1 tag child1`)
    ]
), React.createElement('div', {
    id: "child2"
},
    [
        React.createElement('h1', { id: "heading" }, `It's h1 tag child2`),
        React.createElement('h1', { id: "heading" }, `It's h1 tag child2`),
        React.createElement('h1', { id: "heading" }, `It's h1 tag child2`),
        React.createElement('h1', { id: "heading" }, `It's h1 tag child2`),
        React.createElement('h1', { id: "heading" }, `It's h1 tag child2`)
    ]
)])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(section)
