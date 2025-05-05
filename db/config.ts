import { defineDb, defineTable, column} from 'astro:db';

const User = defineTable({
  columns: {
    id: column.text({primaryKey: true}),
    name: column.text(),
    email: column.text({ unique: true }),
    image: column.text(),
    createdAt: column.date({default: new Date()}),
  }
});

const Report = defineTable({
  columns: {
    reportId: column.text({primaryKey: true}),
    UserId: column.text({references: () => User.columns.id}),
    title: column.text(),
    image: column.text(),
    description: column.text(),
    location: column.text(),
    state: column.text()
  }
});

const UsersReports = defineTable({
  columns: {
    id: column.text({primaryKey: true}),
    reportId: column.text({references: () => Report.columns.reportId}),
    UserId: column.text({references: () => User.columns.id}),
  }
})

export default defineDb({
  tables: {User, Report, UsersReports}
});
