import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/bar/baz')({
    component: Baz,
})

function Baz() {
    return <div className="p-2">Hello from bazbazbaz!</div>
}
