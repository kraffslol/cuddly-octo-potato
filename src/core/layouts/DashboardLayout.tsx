"use client"

import { AppShell } from "@mantine/core"
import React from "react"

import DashboardHeader from "src/core/components/DashboardHeader"
import { DashboardNavbar } from "src/core/components/DashboardNavbar"

export const DashboardLayout = ({
  children,
  currentUser,
}: {
  children: React.ReactNode
  currentUser: any
}) => {
  return (
    <AppShell
      padding="md"
      navbar={<DashboardNavbar />}
      header={<DashboardHeader currentUser={currentUser} />}
    >
      {children}
    </AppShell>
  )
}

export default DashboardLayout
