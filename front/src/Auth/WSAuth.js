import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { PageDataSource, WorkspaceDataSource } from '../Main/ProductionApi'
import { UserInfoContext, WSInfoContext } from '../context'
import { PageAuther, WSAuther, MemoAuther } from '../Auth/Authers'

const pageDataSource = new PageDataSource();
const workspaceDataSource = new WorkspaceDataSource();


export default function WSAuth(props) {
  let { workspace_id } = useParams();
  const { userInfo, setUserInfo } = useContext(UserInfoContext);
  const { WSInfo } = useContext(WSInfoContext)


  // console.log("useParams", workspace_id)
  workspace_id = workspace_id ? workspace_id : "home";
  // console.log("WSAuth", workspace_id)
  const ws = WSInfo.workspaces.find(ws => ws.workspace.id == workspace_id);

  useEffect(() => {
    if (ws) {
      // console.log(ws)
      const user_perm = ws ? ws.permission : null;
      const user = { ...userInfo, permission: user_perm, workspace_id }
      // const pageAuther = new PageAuther(user);
      // const wsAuther = new WSAuther(user);
      // const memoAuther = new MemoAuther(user);
      const homeLink = workspace_id == "home" ? `/${user.id}` : `/${user.id}/ws/${workspace_id}`;
      setUserInfo({ ...user,homeLink})
    }
  }, [workspace_id, WSInfo])

  return (
    props.children
  );
}