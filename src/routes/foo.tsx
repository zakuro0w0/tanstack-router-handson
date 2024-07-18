import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/foo')({
    component: Foo,
})

function Foo() {
    return <div className="p-2">Hello from fooooooooo!</div>
}
