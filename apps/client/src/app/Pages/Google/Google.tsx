import React, { useState, useEffect } from 'react'
import phone from './../../../assets/Form/phone.svg';
import Draggable, { DraggableCore } from 'react-draggable';
import { SideBar } from '../../Components/Sidebar/Sidebar';
import styled from 'styled-components';
import { Widget } from '../../Components/WidgetCard/WidgetCard';
import { AiFillGoogleCircle } from 'react-icons/ai';
import { TopBar } from '../../Components/TopBar/Topbar';
import { GithubFollowers } from '../../Components/Github/Followers/GithubFollowers';
import { GrFormAdd } from 'react-icons/gr';
import { IoIosAdd } from 'react-icons/io';
import { GithubRepositorys } from '../../Components/Github/Repository/GithubRepo';
import { GithubProfile } from '../../Components/Github/Profil/Profil';
import { AddWidget } from '../../Components/AddButton/AddWidget';
import { WidgetListGoogle } from '../../Components/AddButton/WidgetList';
import { IconType } from 'react-icons/lib';
import { Dropdown } from '../../Components/DropDown/DropDown';
import { Link } from 'react-router-dom';
import {
  Container,
  Add,
  WidgetItem
} from '../styled'
import { GoogleMapWidget } from '../../Components/Google/GoogleMap/GoogleMap';

interface Widget {
  title: string
  count: string
  icon: IconType
  content: () => JSX.Element
}

const widgetsAvailable: Widget[] = [
  {
    title: 'Google Maps',
    count: 'Widget',
    icon: AiFillGoogleCircle,
    content: GoogleMapWidget,
  },
  {
    title: 'Youtube',
    count: 'Widget',
    icon: AiFillGoogleCircle,
    content: GithubFollowers,
  },
]



export const GooglePage = () => {
  const [widget, setwidget] = useState<Widget[]>([]);
  const style = { color: "var(--txt-color)", width: "25px", paddingTop: "7px"}

  const display = (title: string) => {
    if (title === "Youtube")
      setwidget([...widget, widgetsAvailable[1]])
    else if (title === "Google Maps")
      setwidget([...widget, widgetsAvailable[0]])
    localStorage.setItem('widgets_google', JSON.stringify(widget))
  }

  const renderList =(item: any, index:any) => (
    <div onClick={() =>display(item.title)} key={index}>
      <WidgetItem>
        <i>{item.icon}</i>
        <span>{item.title}</span>
      </WidgetItem>
    </div>
  )

  useEffect(() => {
    const listSave = JSON.parse(localStorage.getItem('widgets_google') || '[]');
    for (const item of listSave) {
      for (const widgetAvailable of widgetsAvailable) {
        if (item.title === widgetAvailable.title) {
          setwidget(widget => [...widget, widgetAvailable]);
        }
      }
    }
  }, [])

  return (
    <>
      <SideBar />
      <Container>
        <TopBar />
        <Add>
          <Dropdown
              icon= {<IoIosAdd style={style}/>}
              contentData={widgetsAvailable}
              renderItems={(item: any, index:any) => renderList(item, index)}
            />
        </Add>
        {
          widget.map((item, i) => {
            return (
              <div>
                <Widget icon={item.icon} count={item.count} title={item.title} child={item.content}/>
              </div>
            )
          })
        }
      </Container>
    </>
  )
}