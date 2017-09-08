import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAsset } from '../actions/index';

class Asset extends Component {
  constructor(props) {
    super(props);
    this.state = {
      asset: []
    }
  }

  componentWillMount() {
    this.setState({asset: fetchAsset('DhGpagQRmSSaokUYeWugy')});
}

  renderAsset() {
    console.log(this.state.asset.data)
    return this.props.assets.map((asset) => {
      if (asset.sys.id === this.props.assetId) {
        return (
          <img src={asset.fields.file.url} alt={asset.fields.file.fileName} key={`${asset.sys.id}`}/>
        );
      }
    });
  }
  render() {
    return (
      <div>
        {this.renderAsset()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    assets: state.assets
  };
}

export default connect(mapStateToProps, { fetchAsset })(Asset)
