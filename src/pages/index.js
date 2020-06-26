import React from "react"
import { graphql } from "gatsby"
import { MediaPlayer } from "@cassette/player"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default( { data } ) => {

  const feeds = [
    ...data.allFeedMarxMadness.edges,
    ...data.allFeedAintShit.edges,    
    ...data.allFeedHomoVulgaris.edges,
    ...data.allFeedDumbAwful.edges,
    ...data.allFeedArtLabor.edges,
    ...data.allFeedRevLeft.edges,
    ...data.allFeedDeathPanel.edges,
    ...data.allFeedStreetFight.edges,
    ...data.allFeedSrslyWrong.edges,
    ...data.allFeedMandatoryOt.edges,
    ...data.allFeedTheAntifada.edges,
    ...data.allFeedTrillbillyWorkers.edges,
    ...data.allFeedQAnonAnon.edges,
    ...data.allFeedDumbBitch.edges,
    ...data.allFeedInterGalactic.edges,
    ...data.allFeedPsychicDolphin.edges
  ].sort( function( a, b ) {
    return new Date( b.node.pubDate ) - new Date( a.node.pubDate );
  } );

  const playls = feeds.map( e => ( { url: e.node.enclosure.url, title: e.node.title } ) )
  const somas = [
    {
      url: 'http://ice2.somafm.com/missioncontrol-128-aac',
      title: 'Mission Control'
    }, {
      url: 'http://ice2.somafm.com/spacestation-128-aac',
      title: 'Space Station Soma'
    }, {
      url: 'http://ice2.somafm.com/fluid-128-mp3',
      title: 'Fluid'
    }
  ]

  return ( <Layout >

    <SEO title="SPACE PIRATE RADIO" keywords={[
        `radio`,
        `dirtbag`,
        `left`,
        'weird',
        'podcast',
        'intergalactic railroad',
        'biocosm'
      ]}/>
    <div style={{
        backgroundColor: '#372d34',
        marginTop: '82vh',
        marginBottom: '100vh',
        borderWidth: '4px',
        borderStyle: 'solid',
        borderColor: "#90c485",
      }}>
      <MediaPlayer
        autoplay={true}
        autoplayDelayInSeconds={3}
        controls={[ 'playpause', 'backskip', 'forwardskip', 'volume', 'progress' ]}
        playlist={playls}
        gapLengthInSeconds={6}
        />
      <MediaPlayer
        autoplay={true}
        controls={[ 'playpause', 'volume', 'forwardskip',  ]}
        playlist={somas}
        mediaElementRef={media => {
          media.volume= 0.1
        }}
        />

    <div style={{
        marginTop: '1rem',
        padding: '2rem',
        color: '#90c485'
      }}>
      <h2>Playlist</h2>
      <table>
        <thead>
          <tr>
            <th>date</th>
            <th>title</th>
          </tr>
        </thead>
        <tbody>
          {
            feeds.map( ( {
              node
            }, index ) => ( <tr key={index}>
              <td style={{color: '#496984'}}>{node.pubDate.slice(0,11)}</td>
              <td><a href={node.link} style={{ textDecoration: "none", color:"#f0eee7"}}>{node.title}</a></td>
            </tr> ) )
          }
        </tbody>
      </table>
      <h4 style={{textAlign: "center"}}>With ❤ from <a href="http://biocosm.xyz" target="_blank" style={{textDecoration: "none", color:"#f0eee7"}}>IGRR</a></h4>
    </div>
  </div>
  </Layout> )
}

export const query = graphql `
query {
    allFeedMarxMadness(limit:3) {
    totalCount
    edges {
      node {
        title
        isoDate
        link
        pubDate
        enclosure {
          url
        }
        contentSnippet
      }
    }
  }
    allFeedAintShit(limit:3) {
    totalCount
    edges {
      node {
        title
        isoDate
        link
        pubDate
        enclosure {
          url
        }
        contentSnippet
        itunes {
          author
        }
      }
    }
  }
    allFeedHomoVulgaris(limit:3) {
    totalCount
    edges {
      node {
        title
        isoDate
        link
        pubDate
        enclosure {
          url
        }
        contentSnippet
        itunes {
          author
        }
      }
    }
  }
    allFeedDumbAwful(limit:3) {
    totalCount
    edges {
      node {
        title
        isoDate
        link
        pubDate
        enclosure {
          url
        }
        contentSnippet
        itunes {
          author
        }
      }
    }
  }
    allFeedArtLabor(limit:3) {
    totalCount
    edges {
      node {
        title
        isoDate
        link
        pubDate
        enclosure {
          url
        }
        contentSnippet
        itunes {
          author
        }
      }
    }
  }
  allFeedRevLeft(limit:3) {
    totalCount
    edges {
      node {
        title
        isoDate
        link
        pubDate
        enclosure {
          url
        }
        contentSnippet
      }
    }
  }
  allFeedDeathPanel(limit:3) {
    totalCount
    edges {
      node {
        title
        isoDate
        link
        pubDate
        enclosure {
          url
        }
        contentSnippet
        itunes {
          author
        }
      }
    }
  }
  allFeedStreetFight(limit:3) {
    totalCount
    edges {
      node {
        title
        isoDate
        link
        pubDate
        enclosure {
          url
        }
        contentSnippet
        itunes {
          author
        }
      }
    }
  }
  allFeedSrslyWrong(limit:3) {
    totalCount
    edges {
      node {
        title
        isoDate
        link
        pubDate
        enclosure {
          url
        }
        contentSnippet
        itunes {
          author
        }
      }
    }
  }
    allFeedMandatoryOt(limit:3) {
    totalCount
    edges {
      node {
        title
        isoDate
        link
        pubDate
        enclosure {
          url
        }
        contentSnippet
        itunes {
          author
        }
      }
    }
  }
    allFeedTheAntifada(limit:3) {
    totalCount
    edges {
      node {
        title
        isoDate
        link
        pubDate
        enclosure {
          url
        }
        contentSnippet

      }
    }
  }
    allFeedTrillbillyWorkers(limit:3) {
    totalCount
    edges {
      node {
        title
        isoDate
        link
        pubDate
        enclosure {
          url
        }
        contentSnippet
        itunes {
          author
        }
      }
    }

  }   allFeedQAnonAnon(limit:3) {
    totalCount
    edges {
      node {
        title

        isoDate
        link
        pubDate
        enclosure {
          url
        }
        contentSnippet

      }
    }

  }    allFeedDumbBitch(limit:3) {
    totalCount
    edges {
      node {
        title
        isoDate
        link
        pubDate
        enclosure {
          url
        }
        contentSnippet
        itunes {
          author
        }
      }
    }

  }    
  allFeedInterGalactic(limit:3) {
   totalCount
   edges {
     node {
       title
       isoDate
       link
       pubDate
       enclosure {
         url
       }
       contentSnippet
     }
   }

 }
 allFeedPsychicDolphin(limit:3) {
   totalCount
   edges {
     node {
       title
       isoDate
       link
       pubDate
       enclosure {
         url
       }
       contentSnippet
       itunes {
         author
       }
     }
   }

 }
}
  `
