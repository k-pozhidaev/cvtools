import { createServer } from 'http';

const hostname = '127.0.0.1';
const port = 3000;

const skills = [
    ["Java", 5],
    // ["C/C++", 3.5],
    ["Golang", 4],
    ["Python", 4],
    ["Linux", 4],
    ["JavaScript", 5],
    ["Bash", 3],
    ["Groovy", 4],
    ["NodeJS", 3],
    ["SQL", 5],
    ["Docker", 5],
    ["Kubernetes", 3],
    ["Vagrant", 2],
    ["OOP", 4],
    ["Web Development", 5],
    ["Reactive Programming", 3],
    ["Multithreading", 4],
    ["Maven", 3],
    ["Gradle", 4],
    ["EJB", 2],
    ["Spring", 4],
    ["JUnit", 4],
    ["Unit Tests", 5],
    ["Hibernate", 4],
    ["JOOQ", 4],
    ["Angular", 4],
    ["ReactJS", 3],
    ["ExtJS", 4],
    ["JQuery", 4],
    ["Action Script", 3],
    ["Flex", 3],
    ["MySQL", 3],
    ["PostgreSQL", 4],
    ["MongoDB", 3],
    ["Redis", 3],
    ["Oracle", 2],
    ["Rabbit MQ", 3],
    ["CI/CD", 4],
    ["OWASP", 4],
    ["AWS", 4],
    ["Cloud Computing", 3],
    ["Tomcat", 4],
    ["Netty", 3],
    ["NGinx", 2],
    ["Helm", 3],
    ["SOLID", 3],
];

const graduateTable = [ -5, 4, 7, 8, 10, 12 ];

const server = createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');

    const str = skills
        .map((e) => [e[0].replace(/ /g, '&nbsp'), e[1]])
        .map((i) => `<span style="font-size: ${i[1]*2}pt; ">${i[0]}</span>`)
        .join(", ")
    res.write(`<html><body><div style="font-family: 'Helvetica Neue'">${str}</div></body></html>`);
    res.end();
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
