import React from 'react'
import style from '../css/Main.css'

class Main extends React.Component {
    render () {
        return <div className={style.whole}>
            <div className={style.navbar}>
                <div className={style.imgBorder}>
                    <img className={style.img} src='../images/6165847895E8568AE73E6164F3668271B78151E6C.jpg' />
                </div>
                <h1 className={style.title}>Jiaoguibin's Blog</h1>
                <ul role="nav" className={style.nav}>
                    <li className={style.lead}>博文</li>
                    <li className={style.lead}>新文章</li>
                    <li className={style.lead}>关于</li>
                </ul>
            </div>
            <div className={style.contents}>
                {this.props.children}
            </div>
            <div className={style.footer}>
                <a href='https://github.com/cqupt-yifanwu'>My GitHub</a>
            </div>
        </div>
    }
}
module.exports = Main;