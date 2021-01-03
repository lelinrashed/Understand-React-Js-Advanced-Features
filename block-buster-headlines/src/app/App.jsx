import React from 'react'
import Header from '../components/header';
import Loading from '../components/loading';
import NewsList from '../components/newsList';
import Pagination from '../components/pagination';
import News, { newsCategory } from '../news';
import './App.css';


const news = new News(newsCategory.technology)

class App extends React.Component {
	state = {
		data: {},
		isLoading: true
	}

	componentDidMount(prevProps, prevState) {
		news.getNews()
			.then(data => {
				console.log(data);
				this.setState({ data, isLoading: false })
			})
			.catch(e => {
				console.log(e);
				alert('Something Went Wrong')
				this.setState({ isLoading: false })
			})
	}

	next = () => {
		if (this.state.data.isNext) {
			this.setState({ isLoading: true })
		}
		news.next()
			.then(data => {
				console.log(data);
				this.setState({ data, isLoading: false })
			})
			.catch(err => {
				console.log(err);
				alert('Something Went Wrong')
				this.setState({ isLoading: false })
			})
	}

	prev = () => {
		if (this.state.data.isPrevious) {
			this.setState({ isLoading: true })
		}
		news.prev()
			.then(data => {
				console.log(data);
				this.setState({ data, isLoading: false })
			})
			.catch(err => {
				console.log(err);
				alert('Something Went Wrong')
				this.setState({ isLoading: false })
			})
	}

	render() {
		const {
			article,
			isPrevious,
			isNext,
			category,
			totalResults,
			currentPage,
			totalPage
		} = this.state.data

		return (
			<div className='container'>
				<div className="row">
					<div className="col-sm-6 offset-md-3">
						<Header category={category} changeCategory={this.changeCategory} />
						<div className='d-flex'>
							<p>
								About {totalResults} result found
							</p>
							<p className='text-black-50 ml-auto'>
								{currentPage} page of {totalPage}
							</p>
						</div>
						{this.state.isLoading ? (
							<Loading />
						) : (
								<div>
									<NewsList news={article} />
									<Pagination 
										next={this.next} 
										prev={this.prev}
										isPrev={isPrevious}
										isNext={isNext}
										totalPage={totalPage}
										currentPage={currentPage}
									/>
								</div>
							)}
					</div>
				</div>
			</div>
		);
	}
}

export default App;
