import * as React from 'react'
import { render } from 'react-dom'
import styles from './styles.css'

export class Layout extends React.Component {

	componentWillMount() {
		this.setState({
			tab: 'alpha',
			alpha: 0,
			charlie: 0,
			delta: 0,
			babka: 0,
			time: 0,
			hitFactor: 0
		})

		this.inputs = {}
	}

	switchTab(tab) {
		return () => {
			this.setState({tab})
		}
	}

	componentDidUpdate() {
		const tab = this.state.tab
		if (this.inputs[tab])
			this.inputs[tab].focus()
	}

	displayIf(expectedState, def = false) {
		return {
			style: {
				display: this.state.tab == expectedState ? null : 'none'
			}
		}
	}

	bindTo(stateKey) {
		return {
			onChange: (e) => {
				let st = {}
				st[stateKey] = e.target.valueAsNumber
				this.setState(st)
			},
			value: this.state[stateKey],
			ref: r => {
				this.inputs[stateKey] = r
			}
		}
	}

	hitFactor() {
		return Math.round(this.calculateHitFactor(this.state) * 10000) / 10000
	}

	calculateHitFactor(st) {
		return st.time > 0
			? (5 * st.alpha + 3 * st.charlie + 1 * st.delta) / st.time
			: 0;
	}

	render() {
		return (
			<div>
				<div style={{textAlign: 'center'}}>
					<p>
						<span className={styles.tabLink}
							onClick={this.switchTab('alpha')}>A<span>{this.state.alpha}</span></span>
						<span className={styles.tabLink}
							onClick={this.switchTab('charlie')}>C<span>{this.state.charlie}</span></span>
						<span className={styles.tabLink}
							onClick={this.switchTab('delta')}>D<span>{this.state.delta}</span></span>
					</p>
					<span className={styles.tabLink}
						onClick={this.switchTab('babka')}>Б<span>{this.state.babka}</span></span>
					<span className={styles.tabLink}
						onClick={this.switchTab('time')}>Время: {this.state.time}</span>
				</div>
				<div className={styles.tabContainer}>
					<div {...this.displayIf('alpha')}>
						<input className={styles.input} type="number" min="0" inputMode="numeric" pattern="[0-9]*" 
							{...this.bindTo('alpha')}/>
					</div>
					<div {...this.displayIf('charlie')}>
						<input className={styles.input} type="number" min="0" inputMode="numeric" pattern="[0-9]*"
							{...this.bindTo('charlie')}/>
					</div>
					<div {...this.displayIf('delta')}>
						<input className={styles.input} type="number" min="0" inputMode="numeric" pattern="[0-9]*"
							{...this.bindTo('delta')}/>
					</div>
					<div {...this.displayIf('babka')}>
						<input className={styles.input} type="number" min="0" inputMode="numeric" pattern="[0-9]*"
							{...this.bindTo('babka')}/>
					</div>
					<div {...this.displayIf('time')}>
						<input className={styles.input} type="number" min="0" inputMode="numeric" pattern="[0-9]*"
							{...this.bindTo('time')}/>
					</div>
					<div className={styles.hitFactor}>
						ХФ: {this.hitFactor()}
					</div>
				</div>
			</div>
		)
	}
}

render(<Layout/>, document.getElementById("app"))
