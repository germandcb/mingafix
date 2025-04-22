import { defineDb, defineTable, column} from 'astro:db';

const User = defineTable({
  columns: {
    id: column.text({primaryKey: true}),
    googleId: column.text({ unique: true }),
    name: column.text(),
    email: column.text({ unique: true }),
    password: column.text(),
    createdAt: column.date({default: new Date()}),
  }
});

const Report = defineTable({
  columns: {
    reportId: column.text(),
    UserId: column.text({references: () => User.columns.id}),
    title: column.text(),
    location: column.text(),
    description: column.text(),
    image: column.text(),
    state: column.text()
  }
});

export default defineDb({
  tables: {User, Report}
});
