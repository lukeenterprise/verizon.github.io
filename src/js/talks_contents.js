var React = require('react');

function renderTalks(){
  console.log("rendered");
  var TalkElement = React.createClass({
    render: function(){
      var talkDivs = [];
      talkLibrary.forEach(function(e, i){
        talkDivs.push(
          <div key={i} className="content center limit-width talk-unit">
            <div className="col-md-1 col-xs-1 talk-buttons">
              <a href={e.video}>
                <div className="talk-button video">
                  <p className="talk-video-view">Video</p>
                </div>
              </a>
              <a href={e.slides}>
                <div className="talk-button slides">
                  <p className="talk-slide-view">Slides</p>
                </div>
              </a>
            </div>
            <div className="col-md-3 col-xs-3">
              <img className="talk-thumbnail" src={talksThumbnailLibrary[e.name]} alt="Not available" />
            </div>
            <div className="col-md-8 col-xs-8">
              <div className="talk-title">
                <h2>{e.name}</h2>
                <h4>{e.authorName}</h4>
              </div>
            </div>
          </div>
        );
      });
      return (
        <div>
          {talkDivs}
        </div>
      )
    }
  });
  ReactDOM.render(<TalkElement />, document.getElementById("open-source-content"));
}

module.exports = renderTalks
