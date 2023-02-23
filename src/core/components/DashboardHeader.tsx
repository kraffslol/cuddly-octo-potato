"use client"

import { Burger, Container, createStyles, Group, Header, Title } from "@mantine/core"
import type { Team } from "@prisma/client"

type Props = {
  currentUser?: { id: number; name: string; email: string; role: "USER"; team: Team | null } | null
}

const useStyles = createStyles((_theme, _params) => {
  return {
    headerContainer: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      height: "100%",
    },
  }
})

export default function DashboardHeader({ currentUser }: Props) {
  const { classes } = useStyles()
  return (
    <Header height={60} mb={120}>
      <Container className={classes.headerContainer} fluid>
        <Group>
          <Burger opened={false} size="sm" />
          <Title order={4}>Boilerplate</Title>
        </Group>
        {currentUser?.name} - {currentUser?.team?.name}
      </Container>
    </Header>
  )
}
