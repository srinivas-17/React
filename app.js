/* 
<div>
<h1></h1>
<div>

const heading=React.createElement('h1',{id:'heading'},'Hello react wolrd')

const root=ReactDOM.createRoot(document.getElementById('root'))

console.log(heading)
root.render(heading)


<div id='parent'>
    <div id='child'>
        <h1>i'm h1 tag</h1>
    </div>
<div>

const parent=React.createElement('div',{id:'parent'},React.createElement('div',{id:'child'},React.createElement('h1',{},'h1 tag')))


<div id='parent'>
    <div id='child'>
        <h1>i'm h1 tag</h1>
        <h2>he tag</h2>
    </div>
<div>
*/

const parent=React.createElement('div',{id:'parent'},
                        React.createElement('div',{id:'child'},
                        [React.createElement('h1',{},'h1 tag'),React.createElement('h1',{},'h1 tag')]))
                        
const root=ReactDOM.createRoot(document.getElementById('root'))
root.render(parent)