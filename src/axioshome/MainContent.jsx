import React, { Fragment } from 'react'
import Repo from './Repo';
import Spinner from './Spinner';

const MainContent = (props) => {
  return (
      <main id='main_Repo'>
              <main>{props.loading === true ? <Spinner /> : props.repos.map(rep => {
                  return (
                        <Fragment key={rep.id}>
                          <Repo {...rep} />
                        </Fragment>
                  );
              })}</main>
      </main>
  );
}

export default MainContent