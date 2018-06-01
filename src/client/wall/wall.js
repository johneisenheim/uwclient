import React from "react";
// material-ui components
import withStyles from "material-ui/styles/withStyles";
import InputAdornment from "material-ui/Input/InputAdornment";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import loginPageStyle from "assets/jss/material-kit-react/views/loginPage.jsx";
import Upbar from '../upbar/upbar';

import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import SharePost from '../share-post/share-post';

import WallPost from '../wall-post/wall-post';
import LeftList from '../left-list/left-list';
import gql from "graphql-tag";
import { Query } from "react-apollo";

const GET_ALL_POSTS = gql`
  {
    getAllPosts {
      id
      content
      like_number
      shared_number
      sent_by
    }
  }
`;

const style = theme => ({
    root: {
        width: '100vw',
        height: '100vh',
        margin: 0,
        backgroundColor: '#F7F7F7',
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        overflow: 'hidden'
    },
    scrollable: {
        '::-webkit-scrollbar': {
            width: '0 !important '
        },
        '-ms-overflow-style': 'none'
    }
})



class Wall extends React.Component {
    constructor(props) {
        super(props);
        // we use this to make the card to appear after the page has been rendered
        console.log('wall props', props)
    }

    render() {
        const { classes, ...rest } = this.props;
        return (
            <div className={classes.root}>
                <GridContainer justify="center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', width: '100%', height: '100%', marginTop: '85px' }}>
                    <GridItem xs={false} sm={false} md={2} lg={3}>
                        <LeftList />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={8} lg={5} className="wall-scrollable-content" style={{
                        overflow: 'scroll', height: '9000px'
                    }}>
                        <SharePost ref={sharePost => this.sharePost = sharePost} />
                        <Query query={GET_ALL_POSTS}
                            pollInterval={900}
                        >
                            {({ loading, error, data }) => {
                                if (loading) return "Loading...";
                                if (error) return `Error! ${error.message}`;
                                const allPosts = data.getAllPosts;
                                return (
                                    <React.Fragment>
                                        {allPosts.map(post => (
                                            <WallPost data={post} />
                                        ))}
                                    </React.Fragment>
                                );
                            }}
                        </Query>
                    </GridItem>
                    <GridItem xs={false} sm={false} md={2} lg={3}>
                        <LeftList />
                    </GridItem>
                </GridContainer>
            </div>
        );
    }
}

export default withStyles(style)(Wall);