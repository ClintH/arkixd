import React from 'react';
import ProjectThumb from './ProjectThumb';

// class ProjectGridRow extends React.Component {
//   render() {
//     return this.props.projects.map(project => {
//       return (
//         <div key={project.fields.id}>
//           <ProjectThumb value={project} />
//         </div>
//       );
//     });
//   }
// }

export default class ProjectGrid extends React.Component {
  render() {
    const items = this.props.projects.map(project => {
      return (
        <div key={project.fields.id} className="thumbGridItem">
          <ProjectThumb value={project} />
        </div>);
    })

    return (
      <div className="thumbGrid">
        {items}
      </div>
    )
  }

  //   let chunk = function (arr, size) {
  //     let chunked = [];
  //     for (let ele of arr) {
  //       let last = chunked[chunked.length - 1];
  //       if (!last || last.length === size) {
  //         chunked.push([ele]);
  //       } else {
  //         last.push(ele);
  //       }
  //     }
  //     return chunked;
  //   };


  //   let projects = chunk(this.props.projects, 3);

  //   const chunks = projects.map((chunk, index) => {
  //     return (
  //       <main
  //         className='thumbGrid'
  //         key={index.toString() + 'Grid'}
  //       >
  //         <ProjectGridRow key={index.toString() + 'GridRow'} projects={chunk} />
  //       </main>
  //     );
  //   });

  //   return chunks;
  // }
}
