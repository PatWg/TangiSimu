/**
 * Created by Patrick on 19/10/2017
 * Will add a licence after
 */

'use strict';
goog.provide('Blockly.Blocks.basic');
goog.provide('Blockly.Constants.Basic');

goog.require('Blockly.Blocks');

Blockly.Constants.Basic.HUE = 205;
Blockly.Blocks.basic.HUE = Blockly.Constants.Basic.HUE;

Blockly.defineBlocksWithJsonArray([  // BEGIN JSON EXTRACT
    {
        "type": "show_number",
        "message0": "Afficher %1 %2",
        "args0": [
            {
                "type": "input_value",
                "name": "NAME"
            },
            {
                "type": "input_dummy"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 205,
        "tooltip": "Affiche la valeur d'une variable/nombre sur la carte.",
        "helpUrl": ""
    },
    {
        "type": "show_leds",
        "message0": "Afficher %1 %2 %3 %4 %5 %6 %7 %8 %9 %10 %11 %12 %13 %14 %15 %16 %17 %18 %19 %20 %21 %22 %23 %24 %25 %26 %27 %28 %29 %30",
        "args0": [
            {
                "type": "input_dummy"
            },
            {
                "type": "field_checkbox",
                "name": "LED1_1",
                "checked": false
            },
            {
                "type": "field_checkbox",
                "name": "LED2_1",
                "checked": false
            },
            {
                "type": "field_checkbox",
                "name": "LED3_1",
                "checked": false
            },
            {
                "type": "field_checkbox",
                "name": "LED4_1",
                "checked": false
            },
            {
                "type": "field_checkbox",
                "name": "LED5_1",
                "checked": false
            },
            {
                "type": "input_dummy"
            },
            {
                "type": "field_checkbox",
                "name": "LED1_2",
                "checked": false
            },
            {
                "type": "field_checkbox",
                "name": "LED2_2",
                "checked": false
            },
            {
                "type": "field_checkbox",
                "name": "LED3_2",
                "checked": false
            },
            {
                "type": "field_checkbox",
                "name": "LED4_2",
                "checked": false
            },
            {
                "type": "field_checkbox",
                "name": "LED5_2",
                "checked": false
            },
            {
                "type": "input_dummy"
            },
            {
                "type": "field_checkbox",
                "name": "LED1_3",
                "checked": false
            },
            {
                "type": "field_checkbox",
                "name": "LED2_3",
                "checked": false
            },
            {
                "type": "field_checkbox",
                "name": "LED3_3",
                "checked": false
            },
            {
                "type": "field_checkbox",
                "name": "LED4_3",
                "checked": false
            },
            {
                "type": "field_checkbox",
                "name": "LED5_3",
                "checked": false
            },
            {
                "type": "input_dummy"
            },
            {
                "type": "field_checkbox",
                "name": "LED1_4",
                "checked": false
            },
            {
                "type": "field_checkbox",
                "name": "LED2_4",
                "checked": false
            },
            {
                "type": "field_checkbox",
                "name": "LED3_4",
                "checked": false
            },
            {
                "type": "field_checkbox",
                "name": "LED4_4",
                "checked": false
            },
            {
                "type": "field_checkbox",
                "name": "LED5_4",
                "checked": false
            },
            {
                "type": "input_dummy"
            },
            {
                "type": "field_checkbox",
                "name": "LED1_5",
                "checked": false
            },
            {
                "type": "field_checkbox",
                "name": "LED2_5",
                "checked": false
            },
            {
                "type": "field_checkbox",
                "name": "LED3_5",
                "checked": false
            },
            {
                "type": "field_checkbox",
                "name": "LED4_5",
                "checked": false
            },
            {
                "type": "field_checkbox",
                "name": "LED5_5",
                "checked": false
            }
        ],
        "inputsInline": false,
        "previousStatement": null,
        "nextStatement": null,
        "colour": 205,
        "tooltip": "Affiche une configuration spécifique sur la carte.",
        "helpUrl": ""
    },
    {
        "type": "show_string",
        "message0": "Afficher le texte: %1",
        "args0": [
            {
                "type": "field_input",
                "name": "VALUE",
                "text": ""
            }
        ],
        "inputsInline": false,
        "previousStatement": null,
        "nextStatement": null,
        "colour": 205,
        "tooltip": "Show a string on the display",
        "helpUrl": ""
    },
    {
        "type": "pause",
        "message0": "attendre %1 millisecondes",
        "args0": [
            {
                "type": "field_number",
                "name": "VALUE",
                "value": 100,
                "min": 0
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 205,
        "tooltip": "Définit un temps d'attente.",
        "helpUrl": ""
    },
    {
        "type": "show_icon",
        "message0": "Afficher %1",
        "args0": [
            {
                "type": "field_dropdown",
                "name": "ICON",
                "options": [
                    [
                        {
                            "src": "data:image/png;base64,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",
                            "width": 25,
                            "height": 25,
                            "alt": "heart"
                        },
                        "HEART"
                    ],
                    [
                        {
                            "src": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE5ElEQVR4nO3dMY5URxQF0NdGTtAQY3sB3gALsNgTJBapneA9WXbOBryAARIiRABBO5i2Ru2hLv9P9W9V9ZyT8nveVfXcgZGaelUAAADAEHbf+POrqnpaVY+r6vsTz/5SVZ+q6n1Vfbzn15BPvvtalC8V5Ieq+unEoVquq+rdytfId0u+Ps183zVecFXnC1eHWVcrnpfvmHx9mvlaBXm6XZamNTPl65sp38KZrYI83jBIy5qZ8vXNlG/hzFZBTv0L0RJrZsrXN1O+hTNbBQFKQSBSEAgUBAIFgUBBIFAQCBQEAgWBQEEgUBAIFAQCBYFAQSBQEAgUBAIFgUBBIFAQCFoF+XLWFOtnytc3U76FM1sF+bRhkJY1M+XrmynfwpmtgrzfMEjLmpny9c2Ub+HMR42HP1fVvqqebBbn2HVVfVjxvHzH5OvTzOfy6jb5+jyEfAAAAAAAAADwwEz9UZP9fv9LVb2sqmd1szb4lN5V1Zuqer3b7f6659dwfpOf37R70vf7/a9V9ds2cY5HVdWr3W73+8rXOb/DqJr4/FoFuaqqnzeL83X/1MKfhIeffH/Wt/8GPJV9VT1f8ZPQ+f1vZE16frPuSX9Z53tz6zDrxYrnnd+xac9v1j3pzzZLcZqZzq9v5jDnN+ue9FP/QrnEjyuedX53TXl+bjWBQEEgUBAIFAQCBYFAQSBQEAgUBAIFgUBBIFAQCBQEAgWBQEEgUBAIFAQCBYFAQSBQEAhm3ZO+6g6oE3m74lnnd9eU5zfrnvQ3m6U4zUzn1zdzmPObdU/667q5jOxc9oeZSzm/Y9OeX6sgH+vmOsZzua4V98sebuh7Ved5k/+7OvPvFa9xfremPr9LuLz6Rd1cSrbm3qUl3tbNPwv+mPny5cT52ZMOAAAAAAAAAOtcwkdNht3zLZ896adycXu+5bsdVfakn8TF7PmW7+7Isie92yXt+ZbvmD3pJ3BJe77l65s5zPefPenLrfn/EvLdZU86XBoFgUBBIFAQCBQEAgWBQEEgUBAIFAQCBYFAQSBQEAgUBAIFgUBBIFAQCBQEAgWBQEEgsCd9uTV7vuW7y570Tpe051u+vpnDfP/Zk77M2j3f8h2zJ73TRe35lu+IPen3dPF7vuWzJx0AAAAAAAAALsvUHzWpwfPZQz7/+zvtnvQaPJ895EemfX+n3JNeg+ezh/yrpnx/Z92TPno+e8j7Zg6Tb9Y96aPns4e8b+Yw+Wbdkz56PnvI+2YOk8+tJhAoCAQKAoGCQKAgECgIBAoCgYJAoCAQKAgECgKBgkCgIBAoCAQKAoGCQKAgECgIBAoCwax70kfPZw9538xh8s26J330fPaQ980cJt+se9JHz2cPed/MYfJNuSe9Bs9nD/kd076/Lq9uu/g97jX4+dX4+QAAAAAAAADggfFRkzb5+lxEPnvSl5Gvz7T5Wp/mvarzhavDrKsVz8t3TL4+zXz2pG8zU76+mcPksyd9m5ny9c0cJp896dvMlK9v5jD53GoCgYJAoCAQKAgECgKBgkCgIBAoCAQKAoGCQKAgECgIBAoCgYJAoCAQKAgECgKBgkCgIBDYk77NTPn6Zg6Tz570bWbK1zdzmHz2pG8zU76+mcPke9R4+HPd7N9+slmcY9dV9WHF8/Idk69PM5/Lq9vk6/MQ8gEAAADn8i9uSXT/dv6GSgAAAABJRU5ErkJggg==",
                            "width": 25,
                            "height": 25,
                            "alt": "small heart"
                        },
                        "HEART_SMALL"
                    ],
                    [
                        {
                            "src": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFHUlEQVR4nO3dQY5UZRQF4FsaJ6Qdoy7ADbAA455gYpjqBPdkdM4GXADCxBFhIINy0G2k0u+efsVfr/ir+L4h3e09eckRiOU7VQAAAMAUdg98/aaqHlfVo6r66sS331fVu6p6U1VvP/KfIZ98H2tVvlSQb6rquxOH6ryqqtdH/ox8/5NvTJvvi+YHbup84eru1s0R3y/fIfnGtPm6gjzeLkvrmJvyjd2Ub+XNriCPNgzSOeamfGM35Vt5syvIqf9CtMYxN+UbuynfyptdQYBSEIgUBAIFgUBBIFAQCBQEAgWBQEEgUBAIFAQCBYFAQSBQEAgUBAIFgUBBIFAQCBQEgq4g78+a4vib8o3dlG/lza4g7zYM0jnmpnxjN+VbebMryJsNg3SOuSnf2E35Vt78svnmf6pqX1Vfbxbn0Kuq+vuI75fvkHxj2nxeXt2Tb8znkA8AAAAAAAAAPjM+atKTb8xwvv1+/0NVPauqJ3U7C31Kr6vqZVW92O12v3ffZCd9HfnGHJ1vv9//VFU/bxPn8FRVPd/tdr8sfbEryE1Vfb9ZpGV/1vp/08h339Xku/ud47d6+E84p7Kvqh+Xfiexk77NTfnGbj6r85Wj7m49XfqCnfRtbso3dvPJZimOvGknfZub8o3dPPVfyNf4dukXvdUEAgWBQEEgUBAIFAQCBYFAQSBQEAgUBAIFgUBBIFAQCBQEAgWBQEEgUBAIFAQCBYFAQSCwk77NTfnGbh77jq9T+GvpF+2kb3NTvrGbLzdLceRNO+nb3JRv7OaLun2Z27ns727e0xXkbd2+LvJcXtVx72+V79BV5bt7w+HzOk9J/nv16B+LWR744alfblzyXXW+u1eQPq3bl7otvrdqwF91+8eqX9PLqwEAAAAAAACAD/moSe/q882wQ/6AT/787KSvc3X5ZtkhD6Z4fnbS17uafDPtkDemeX520re5OXu+aXbIG9M8Pzvp29ycPd80O+SNaZ6fnfRtbs6eb5od8sY0z89bTSBQEAgUBAIFgUBBIFAQCBQEAgWBQEEgUBAIFAQCBYFAQSBQEAgUBAIFgUBBIFAQCBQEAjvp29ycPd80O+SNaZ6fnfRtbs6eb5od8sY0z89O+jY3Z883zQ55Y5rnZyd9navKN9MOeWOa5+fl1b2rz3cBO+RTPz8AAAAAAAAA+PzEj5rY0bZDPuAqPqrTFsSO9gE75GMudmd+sSB2tBfZIR9zkTvz3cfd7WiP3fT8xm5Ok68riB3tsZue39jNafJ1BbGjPXbT8xu7OU0+bzWBQEEgUBAIFAQCBYFAQSBQEAgUBAIFgUBBIFAQCBQEAgWBQEEgUBAIFAQCBYFAQSBQEAi6gtjRHrvp+Y3dnCZfVxA72mM3Pb+xm9Pk6wpiR3vspuc3dnOafIsFsaN9jx3yMRe7M7/m5dV2tO2Qf4yreHk1AAAAAAAAAPChh4Ymp/5P/XbIr/6jHJ88XyrIFDvVHTvkBy52hzyYIl9XkGl2qpfYIV90kTvkjWnydf8/yDQ71Q075GM35Vt5syvINDvVDTvkYzflW3mzK8g0O9UNO+RjN+VbedNbTSBQEAgUBAIFgUBBIFAQCBQEAgWBQEEgUBAIFAQCBYFAQSBQEAgUBAIFgUBBIFAQCBQEgq4g0+xUN+yQj92Ub+XNriDT7FQ37JCP3ZRv5c2uINPsVDfskI/dlG/lza4g0+xUL7FDfs/F7pA3psl3DS+vtkN+wS+HfsDs+QAAAIBz+RdDw2v5jDe3GQAAAABJRU5ErkJggg==",
                            "width": 25,
                            "height": 25,
                            "alt": "yes"
                        },
                        "YES"
                    ],
                    [
                        {
                            "src": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFCElEQVR4nO3dMY5URxQF0NeWnCBysBfgDbAAy3uCxCK1E7wny87ZgBcAJkckBO1g2sJN/7r+f6p7VPXnnJQZ3lNNXRBSU7cKAAAAGMIh/eLxePyxql5V1Yuqen7l2X9X1duqenM4HP645+/xtKqeVdWTqvr2WoudfK6qT1X1oao+3vP3sF/HfiPcv2ZAjsfjz1X1y5WXWhxVVa8Ph8OvG7/veVV9f4N9lryruwPdwn5fbN5vlPu3GJBTcn9v/foNHKvqpw1/kzytqh9uuM+Sv2r9n4T2u7R6v5Hu3zeNb3hVD7dcnWa93PD1z261yJVm2q9v5jD3rxWQF7fbpWnLzCc32+I6M+3XN3OY+9cKyLX/QbTGdxu+9tr/oLz2TPv1zRzm/rUCApSAQCQgEAgIBAICgYBAICAQCAgEAgKBgEAgIBAICAQCAoGAQCAgEAgIBAICgYBAICAQtAKy9Y2la3i/4Ws/32yL68y0X9/MYe5fKyBvb7hIy5aZn262xXVm2q9v5jD3rxWQN3X3mNZDOZ5mrvXhVotcaab9+mYOc/8WA3J6Ye51PcyS/z79+OeG7/lYd89ZPpR3te19Wfud27TfSPdvzePVL+vuUa0t71at8b7u/lr7zePV97L7/Sa4fwAAAAAAAADwyPxfUeIMH0XQ4+787mPV+aWA6NE+jaod9rg7vzPN82sFRI/2VyNrRz3uzm/R4vm1/j+IHu1ze+txd34rZ7YCoke7b6bz65s5zPm1AqJH+9Keetyd38qZXjWBQEAgEBAIBAQCAYFAQCAQEAgEBAIBgUBAIBAQCAQEAgGBQEAgEBAIBAQCAYFAQCAQEAhaAdGjfWlPPe7Ob+XMVkD0aPfNdH59M4c5v1ZA9Gif21uPu/NbObMVED3aX+yux935XWie3x4erx65R9v57fj8AAAAAAAAAODxmfqjJjX4fnrI5//5TtuTXoPvp4f8zLQ/3yl70mvw/fSQL5ry5ztrT/ro++kh75s5zH6z9qSPvp8e8r6Zw+w3a0/66PvpIe+bOcx+XjWBQEAgEBAIBAQCAYFAQCAQEAgEBAIBgUBAIBAQCAQEAgGBQEAgEBAIBAQCAYFAQCAQEAhm7UkffT895H0zh9lv1p700ffTQ943c5j9Zu1JH30/PeR9M4fZb8qe9Bp8Pz3kF6b9+Xq8uk0PeZ/d/3wBAAAAAAAA4PGZ+qMmesidX4d996TrIT/j/PrsqyddD/ki59dnVz3pesj7Zjq/lTNn7UnXQ9430/mtnDlrT7oe8r6Zzm/lTK+aQCAgEAgIBAICgYBAICAQCAgEAgKBgEAgIBAICAQCAoGAQCAgEAgIBAICgYBAICAQCAgEs/ak6yHvm+n8Vs6ctSddD3nfTOe3cuasPel6yPtmOr+VM6fsSddDfsH59dlnT7oecufXQU86AAAAAAAAAGwWP2qiR7v7owj2m7zHvRkQPdpnNveQl/3+a9oe98WA6NFetLqHvOy3ZMoe99bH3fVo9820X9/MYe5fKyB6tPtm2q9v5jD3rxUQPdp9M+3XN3OY++dVEwgEBAIBgUBAIBAQCAQEAgGBQEAgEBAIBAQCAYFAQCAQEAgEBAIBgUBAIBAQCAQEAgGBoBUQPdp9M+3XN3OY+9cKiB7tvpn265s5zP1rBUSPdt9M+/XNHOb+LQZEj/aFTT3kZb+vTdvjvubxaj3aO30cugbfb4L7BwAAADyUfwDmcbblze7mOAAAAABJRU5ErkJggg==",
                            "width": 25,
                            "height": 25,
                            "alt": "NO"
                        },
                        "NO"
                    ],
                    [
                        {
                            "src": "data:image/png;base64,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",
                            "width": 25,
                            "height": 25,
                            "alt": "happy"
                        },
                        "HAPPY"
                    ],
                    [
                        {
                            "src": "data:image/png;base64,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",
                            "width": 25,
                            "height": 25,
                            "alt": "sad"
                        },
                        "SAD"
                    ],
                    [
                        {
                            "src": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFd0lEQVR4nO3dMW5TWxAG4N8PvQaFmsdbABvIAhB7ShqUFpqwJwR9NsACAjRUiAKK+wob8UxyhntzbMuHfF/LdWY01u8QyZpJAAAAgKOw+s2/nyR5nORhkr93XPt7kq9JPiX5csefoT/93dWs/qqA/JPk3x031XKd5OPC1+jvJ/31afb3V+MFJzlcc9nUOlnwvP626a9Ps79WQB7vr5emJTX111dTfzNrtgLycI+NtCypqb++mvqbWbMVkF3/QTTHkpr666upv5k1WwEBIiBQEhAoCAgUBAQKAgIFAYGCgEBBQKAgIFAQECgICBQEBAoCAgUBgYKAQEFAoCAgUBAQKLQC8v2gXSyvqb++mvqbWbMVkK97bKRlSU399dXU38yarYB82mMjLUtq6q+vpv5m1nzQePhbkinJo721s+06yecFz+tvm/76NPuzvLpNf33uQ38AAAAAAAAAcM8M/VWTaZqeJTlPcpr12eBd+pjkKsnlarV6e8efYX6Dz2/YO+nTNL1I8nI/7WyXSnKxWq1eLXyd+W1KZeD5tQJykuTp3tq53fvM/CTcfPK9ye9/A+7KlOT5gk9C8/ulZAad36h30s9zuDc3m1pnC543v23Dzm/UO+mne+tiNzXNr6/m0cxv1Dvpu/6Dco4nC541v5uGnJ+tJlAQECgICBQEBAoCAgUBgYKAQEFAoCAgUBAQKAgIFAQECgICBQGBgoBAQUCgICBQEBAoCAgURr2TvmgH1I58WPCs+d005PxGvZN+tbcudlPT/PpqHs38Rr2Tfpn1MrJDmTY15zK/bcPOrxWQL1mvYzyU6yzYL7vZ0HeRw7zJP1ZnvlvwGvP7aej5/QnLq8+yXkq2ZO/SHB+y/m/B65GXL1fMz510AAAAAAAAAFhm6K+aRH/6u7s/+0569Pd/+uvT7K/1bd6THK65bGqdLHhef9v016fZ36h30vXXV1N/M2uOeiddf3019Tez5qh30vXXV1N/M2vaagIFAYGCgEBBQKAgIFAQECgICBQEBAoCAgUBgYKAQEFAoCAgUBAQKAgIFAQECgICBQGBgoBAYdQ76frrq6m/mTVHvZOuv76a+ptZc9Q76frrq6m/mTUfNB7+lvV960d7a2fbdZLPC57X3zb99Wn2Z3l1m/763If+AAAAAAAAAOCeGfqrJtM0PUtynuQ067PBu/QxyVWSy9Vq9faOP8P8Bp/fsHfSp2l6keTlftrZLpXkYrVavVr4OvPblMrA82sF5CTJ0721c7v3mflJuPnke5Pf/wbclSnJ8wWfhOb3S8kMOr9R76Sf53Bvbja1zhY8b37bhp3fqHfST/fWxW5qml9fzaOZ36h30nf9B+UcTxY8a343DTk/W02gICBQEBAoCAgUBAQKAgIFAYGCgEBBQKAgIFAQECgICBQEBAoCAgUBgYKAQEFAoCAgUBAQKIx6J33RDqgd+bDgWfO7acj5jXon/WpvXeympvn11Tya+Y16J/0y62VkhzJtas5lftuGnV8rIF+yXsd4KNdZsF92s6HvIod5k3+szny34DXm99PQ8/sTllefZb2UbMnepTk+ZP3fgtcjL1+umJ876QAAAAAAAACwTPlVE3e03SHv8EfMrxkQd7S3uEPeZ9j53RoQd7Rv5Q55nyHn1/q6uzvafTXNr6/m0cyvFRB3tPtqml9fzaOZXysg7mj31TS/vppHMz9bTaAgIFAQECgICBQEBAoCAgUBgYKAQEFAoCAgUBAQKAgIFAQECgICBQGBgoBAQUCgICBQEBAotALijnZfTfPrq3k082sFxB3tvprm11fzaObXCog72n01za+v5tHM79aAuKN9gzvkfYad35zl1e5ou0N+F/dhfgAAAMCh/AecHIXJK5h09QAAAABJRU5ErkJggg==",
                            "width": 25,
                            "height": 25,
                            "alt": "confused"
                        },
                        "CONFUSED"
                    ],
                    [
                        {
                            "src": "data:image/png;base64,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",
                            "width": 25,
                            "height": 25,
                            "alt": "angry"
                        },
                        "ANGRY"
                    ],
                    [
                        {
                            "src": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAACXBIWXMAAAsTAAALEwEAmpwYAAAF3klEQVR4nO3dPY4cVRQF4NNYJGgc87MAFoAXgNiTnSCnkJg9IcjNAljA2CSOEIEJiqAbcMvzrl/N62q98nxfOtVzj2rqTHuk9rsJAAAAMIXDB75+k+TzJJ8l+fTCs/9O8leSP5L8ec/vIZ9899WVryrIF0m+unColtskr1e+Rr7/yTemme+Txgtucr1wOc26WXG9fOfkG9PM1yrI59tlaVozU76xmfJ1zmwV5LMNg7SsmSnf2Ez5Ome2CnLpP4h6rJkp39hM+TpntgoCREGgpCBQUBAoKAgUFAQKCgIFBYGCgkBBQaCgIFBQECgoCBQUBAoKAgUFgYKCQEFBoKAgUGgV5O+rplg/U76xmfJ1zmwV5K8Ng7SsmSnf2Ez5Ome2CvLHhkFa1syUb2ymfJ0zHzUufptkSfJ4szjnbpO8WXG9fOfkG9PM5/DqNvnGPIR8AAAAAAAAAPDAlB81WZbl2yTPkjzJcS3vJb1O8jLJi8Ph8Mt9vsHs+TL5RyVmv38z5GsWZFmW75P8cOFQd45K8vxwOPy46kWT58ske75bZr9/s+S7syCn5v7c+voGliTf9f6mmT1fju8cX2+Y5y6/p/OdZPb7N1O+1v8HeZbrhctp1tMV18+eb5o93w2z379p8rUK8mS7LE1rZs6eb5o93w2z379p8rX+ibVsm+Vuh8Oh67fG7PmSfLNpkLbfei6a/f7NlM+pJlBQECgoCBQUBAoKAgUFgYKCQEFBoKAgUFAQKCgIFBQECgoCBQWBgoJAQUGgoCBQUBAoKAgUWgVZdcbShbxace3s+abZ890w+/2bJl+rIC83DNKyZubs+abZ890w+/2bJl+rIC9yPEzrWpbTzF6z55tmz3fD7Pdvmnx3FuR0wtzzXCfkv0c//tr7gtnz5XjC4e1Gee5ymxXn885+/2bK13N49dMcD9X68sLBXuX4tvbT4OHG0+bLPg6vnvb+zZ4PAAAAAAAAAB6eD63EmvqjEpFPvvvrylcVZOo935HvXfKNaeZrfdz9JtcLl9OsmxXXy3dOvjHNfK2CzL7nW76xmfJ1zmwVZPY93/KNzZSvc2arIJf+g6jHmpnyjc2Ur3OmU02goCBQUBAoKAgUFAQKCgIFBYGCgkBBQaCgIFBQECgoCBQUBAoKAgUFgYKCQEFBoKAgUFAQKLQKMvueb/nGZsrXObNVkNn3fMs3NlO+zpmtgsy+51u+sZnydc581Lj4bY77ox9vFufcbZI3K66X75x8Y5r5HF7dJt+Yh5APAAAAAAAAAB6YXX/UZFmWb5M8S/Ikx7XBl/Q6ycskLw6Hwy/3+QbyjeXLBM/fbvekL8vyfZIftolzPirJ88Ph8OOqF8n336jcI18mef5aBblJ8vVmce72ezrfSU6/+X7Oh98BL2VJ8l3vb0L53h+ZFfky0fO31z3pz3K9H25Os56uuF6+c2vzTfP87XVP+pPNUlxmpnxjM6d5/va6J/3Sf1D2+HLFtfK9b02+aZ4/p5pAQUGgoCBQUBAoKAgUFAQKCgIFBYGCgkBBQaCgIFBQECgoCBQUBAoKAgUFgYKCQEFBoKAgUNjrnvRVZ2hdyKsV18r3vjX5pnn+9ron/eVmKS4zU76xmdM8f3vdk/4ix8PIrmU5zewl37m1+aZ5/loF+TPH4xiv5TYrzuc9ndD3PNf5If97dOavvS+Q78zqfJno+fsYDq9+muOhZGvOXerxKsd/Fvw0eDi0fDs+vBoAAAAAAAAAeNeuP2oS+eS7v497T3rke5d8Y5r5Wp/mvcn1wuU062bF9fKdk29MM99e96TLNzZTvs6Ze92TLt/YTPk6Z+51T7p8YzPl65zpVBMoKAgUFAQKCgIFBYGCgkBBQaCgIFBQECgoCBQUBAoKAgUFgYKCQEFBoKAgUFAQKCgIFBQECnvdky7f2Ez5OmfudU+6fGMz5eucudc96fKNzZSvc+ajxsVvc9xv/XizOOduk7xZcb185+Qb08zn8Oo2+cY8hHwAAADAtfwDbK2ONrQZz3kAAAAASUVORK5CYII=",
                            "width": 25,
                            "height": 25,
                            "alt": "asleep"
                        },
                        "ASLEEP"
                    ],
                    [
                        {
                            "src": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFc0lEQVR4nO3dP25UVxQG8G8SpUFODWQBbMALiNiT3SC30Jg9Iei9ARbAnyYVogjFpJhBycR+h/d8543uNb9fmzHn07E+EyTrngQAAADowuYH//0syeMkj5L8duTZ35J8TfI5yZf7/AHb7fbPJJdJzpM8OV60JMmnJDdJrjebzdt7/hn2N/j+qoI8SfLHkUNN+ZDdQmfbbrcvkrxcJ87hqCRXm83m1cKvs7/9qAy8v6mCnCV5tlqcu73PzJ+E+598b/LjvwGPZZvk+YKfhPb3v5EZdH+/THz48bpZmmde5nTf3OxnXSz4vP0dGnZ/UwV5tGKQKUtmnq+W4jgz7a9tZjf7myrIsf9BNMeSmcf+B+UcTxd81v5uG3J/UwUBoiBQUhAoKAgUFAQKCgIFBYGCgkBBQaCgIFBQECgoCBQUBAoKAgUFgYKCQEFBoKAgUFAQKEwV5NtJUyyfuegNqCP5uOCz9nfbkPubKsjXFYNMWTLzZrUUx5lpf20zu9nfVEE+rxhkypKZ19k9RnYq2/3Muezv0LD7myrIl+yeYzyVD1nwvuz+hb6rnOab/P3pzHcLvsb+/jX0/h7C49UX2T1KtuTdpTk+Zve/Ba9Hfny5Yn9t+wMAAAAAAACAn8/Qv2oS+eS7v4d9Jz3y/Zd8bSbzTf0271lOFy77WWcLPi/fIfnaTOYb9U66fG0z5Zs5c9Q76fK1zZRv5sxR76TL1zZTvpkzvWoCBQWBgoJAQUGgoCBQUBAoKAgUFAQKCgIFBYGCgkBBQaCgIFBQECgoCBQUBAoKAgUFgYKCQGHUO+nytc2Ub+bMUe+ky9c2U76ZM0e9ky5f20z5Zs78deLDf2d33/r31eIc+pDkrwWfl++QfG0m83m8epp8bX6GfAAAAAAAAADwk/GrJtOa82232z+TXCY5z+6s8TF9SnKT5Hqz2by955/R9f7SQT530udZnG+73b5I8nKdOIejklxtNptXC7+u6/2lk3xTBTlL8my1OHd7n/k/abrOt/+b401+/Df0sWyTPF/wN0nX+0tH+dxJX2fmZU5XjuxnXSz4fO/76yafO+nrzDxfLcVxZva+v27yuZO+zsxj/4N8jqcLPtv7/rrJ51UTKCgIFBQECgoCBQWBgoJAQUGgoCBQUBAoKAgUFAQKCgIFBYGCgkBBQaCgIFBQECgoCBQUBArupK8zc+kbUMfwccFne99fN/ncSV9n5s1qKY4zs/f9dZPPnfR1Zl5n95jbqWz3M+fqfX/d5JsqyJfsnmM8lQ9Z9n5r1/n2Lxxe5TQl+f706LsFX9P1/tJRPo9XTzvW49UX2T3qtuTdqjk+Zve/Va89Xn0v7qQDAAAAAAAAwGJD/6qJO+T21+Bh30l3h/yA/bV5WHfS3SG/k/21eVB30t0hb5tpfzNnjnon3R3ytpn2N3PmqHfS3SFvm2l/M2d61QQKCgIFBYGCgkBBQaCgIFBQECgoCBQUBAoKAgUFgYKCQEFBoKAgUFAQKCgIFBQECgoCBQWBwqh30t0hb5tpfzNnjnon3R3ytpn2N3PmqHfS3SFvm2l/M2cOeSfdHfJb7K/Nw7yT7g65/TVwJx0AAAAAAAAAFhv6V03SeT53yMf//g57Jz2d53OH/MCw398h76Sn83zukN9pyO/vqHfSe8/nDnnbzG7yjXonvfd87pC3zewm36h30nvP5w5528xu8nnVBAoKAgUFgYKCQEFBoKAgUFAQKCgIFBQECgoCBQWBgoJAQUGgoCBQUBAoKAgUFAQKCgIFBYHCqHfSe8/nDnnbzG7yjXonvfd87pC3zewm36h30nvP5w5528xu8g15Jz2d53OH/JZhv78er57mDnmbB//9BQAAAE7oHzt4fMP9uDtRAAAAAElFTkSuQmCC",
                            "width": 25,
                            "height": 25,
                            "alt": "surprised"
                        },
                        "SURPRISED"
                    ],
                    [
                        {
                            "src": "data:image/png;base64,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",
                            "width": 25,
                            "height": 25,
                            "alt": "silly"
                        },
                        "SILLY"
                    ],
                    [
                        {
                            "src": "data:image/png;base64,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",
                            "width": 25,
                            "height": 25,
                            "alt": "fabulous"
                        },
                        "FABULOUS"
                    ],
                    [
                        {
                            "src": "data:image/png;base64,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",
                            "width": 25,
                            "height": 25,
                            "alt": "meh"
                        },
                        "MEH"
                    ],
                    [
                        {
                            "src": "data:image/png;base64,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",
                            "width": 25,
                            "height": 25,
                            "alt": "t-shirt"
                        },
                        "TSHIRT"
                    ],
                    [
                        {
                            "src": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFyUlEQVR4nO3dMW4USRQG4NcrkVjObTgAF+AAFneCBDmFBG6zmyPIuQAHsNe55cQStcGMQbN2Pbrc3ePq4ftSZub9KvgHjzSuFwEAAAB0YfjNnx9HxElEHEXEs5ln30bETURcRcT1I19Dvgn5SilnEfE2Il5FxOl80SIi4t+I+BYRH4dh+PKYF+ghX1aQ04h4MXOomovYBG4h3y/N+Uop7yLi/TJxdkdFxPkwDB+antRJvlpBjiPi5WKRHvY9xr8Tynff6Hzbd+bP8fufIOZSIuL12P9Jesr3V+UJJ8vmmTxTvmkz38b+/vHFdtabhsd3k69WkKPlslS1zJRv2sxXi6WYZ2Y3+WoFmfsD5RgtM+WbNnPuD7xjPG94bDf5agUBQkEgpSCQUBBIKAgkFAQSCgIJBYGEgkBCQSChIJBQEEgoCCQUBBIKAgkFgYSCQEJBIKEgkKgV5HavKdpnyjdtZusdX3O4bHhsN/lqBblZMEhNy0z5ps38tliKeWZ2k69WkKsFg9S0zJRv2syPsbksbV/KduZY3eSrFeQ6NtdZ7stFtN0vK9+upnzbGwTPYz//CO+u9vw69gk95XN5dd3B59te8fkmNpemtdxbNcZlbH5s+TTx8upu8wEAAAAAAADAn8dXTeoOPl8Pe8gzPeSzJ32cg8vXyx7y6pM6yWdP+ngHk6+nPeQPPrijfPakLzOz93zd7CGv6CafPenLzOw9Xzd7yGd47FzsSZ/okPJ1s4e8opt8bjWBhIJAQkEgoSCQUBBIKAgkFAQSCgIJBYGEgkBCQSChIJBQEEgoCCQUBBIKAgkFgYSCQEJBIGFP+jIze8/XzR7yim7y2ZO+zMze83Wzh3yGx87FnvSJDilfN3vIK7rJZ0/6OAeVr6c95A/pKZ/Lq+sOPl/ve8h7zwcAAAAAAAAA7CilnJVS/imlXJb5XW5f+0w++VaXr5TyboFQD/lRNjux5ZNvHfnKprk/9hTwLuToJssn377y1b7u3s2e6gr5dsk3TfOe9G72VM/w2LnIN80q8z3Y0lLKPn+b66dhGEa9a8j3MPmmeSifW00goSCQUBBIKAgkFAQSCgIJBYGEgkBCQSChIJBQEEgoCCQUBBIKAgkFgYSCQEJBIKEgkFAQSNQK0s2e6gr57pNvmqY96d3sqZ7hsXORb5pV5qsVpJs91RXy7ZJvmtZ8P69+3MftdlOuppRPvifJdxfyrJTydynlYoFgF9vXnnq5sXzyPUk+AAAAAAAAAGBH6XlPtXzyPWW+0vOeavnke8p8paM91fLJ95T57EkfR75pVpvPnvRlZso3bWY3+exJbyDfNGvM51YTSCgIJBQEEgoCCQWBhIJAQkEgoSCQUBBIKAgkFAQSCgIJBYGEgkBCQSChIJBQEEgoCCQUBBL2pI8n3zSrzGdP+jIz5Zs2s5t89qSPI980h5av/z3V8sn3lPnuQp6VjvdUyyffU+YDAAAAAAAAgD/P71ZiHUfESUQcRcSzmWffRsRNRFxFxPVjXmD7NYG3sdkvdzpftIjYfOX6W0R8HIbhyyNfw/mt/PyygpxGxIuZQ9VcROPvAJTNF8zeLxNnd1REnA/D8KHxec5vOypWfH61ghxHxMvF4jzse4x8J9y+832O/a0KLhHxuuGd0Pn9b2Ss9Pxqvw9ysmyWyTO72aNd4fx2rfb8agU5WjBITcvMbvZoVzi/aTO7Ob9aQeb+QDRGy8y5P1CO8bzhsc7vvlWen1tNIKEgkFAQSCgIJBQEEgoCCQWBhIJAQkEgoSCQUBBIKAgkFAQSCgIJBYGEgkBCQSChIJBQEEjUCnK71xTtM7vZo13h/O5b5fnVCnKzYJCalpnd7NGucH7TZnZzfrWCXC0YpKZlZu97tJ3frtWeX60g17G5jnFfLqLhftntDX3nsZ+/5LurM782PMf5/bLq8zuEy6vfxOZSspZ7l8a4jM2PBZ/WfPlyxvlNOz8AAABgj/4DKpNLjifM3PsAAAAASUVORK5CYII=",
                            "width": 25,
                            "height": 25,
                            "alt": "rollerskate"
                        },
                        "ROLLERSKATE"
                    ],
                    [
                        {
                            "src": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFW0lEQVR4nO3dMXIcVRQF0DdQJC4R27AAFoAXQLEnO6GcQmL2REFuFsACZJwQuRzgYAhGYKZm/tP/+t1Tr0fnpG7p36ruK1tlqW8EAAAAUMLunj+/iYinEfEkIr5Y+OyPEfEhIt5FxPuHfIL9fv9dRLyMiOcR8Wy5aBER8WdEvImI17vd7teHfILq+aL4/Y0C+bKCPIuIrxcO1XIbhxvebb/f/xARP64T5/ioiHi12+1+Gvqg4vmi+P2NIvlaBbmJiG9Wi3PeH9H5lebuK/Mvcf/fgEvZR8T3vV+pq+eL4vc3CuX7rHHx03WzTJ/5Mi738MXdWS8Grq+er/r9LZOvVZAnKwZpGTnz+Wopljmzer7q97dMvlZBlv6GqMfImUt/w9vjq4Frq+erfn/L5GsVBAgFgZSCQEJBIKEgkFAQSCgIJBQEEgoCCQWBhIJAQkEgoSCQUBBIKAgkFAQSCgIJBYGEgkCiVZCPF00xfuboO5aW8Hbg2ur5qt/fMvlaBfmwYpCWkTPfrJZimTOr56t+f8vkaxXk3YpBWkbOfB2Hl6Vdyv7uzF7V81W/v2XytQryPg6vY7yU2xh4f+vdGwRfxWUewn9f7flb7wdUzxfF728UyncNL69+EYeXpo28F6rH2zj8s+XnyZdXl80Xxe9v1M8HAAAAAAAAAI9M+qMm1Xe+5bOTPmFuJ736zrd8n44KO+mzxnbSq+98y3d6ZNhJnzW0k15951u+Y3bS5w3tpFff+ZZv7swyO+QLXLuUoZ306jvf8p2ykz7HTjqMUhBIKAgkFAQSCgIJBYGEgkBCQSChIJBQEEgoCCQUBBIKAgkFgYSCQEJBIKEgkFAQSCgIJFoFqb7zLd8pO+lzhnbSq+98yzd3Zpkd8gWuXcrQTnr1nW/5jtlJn9e/k15951u+I3bS5z1sJ736zrd8dtIn2EkHAAAAAAAAgGH3DU2W/q/+6jvk8m0/X1aQEjvVLdV3yOX7dFRsOF+rIGV2qs+pvkMu3+mRsdF8rd8HKbNT3VB9h1y+Y5vN1ypImZ3qhuo75PLNnVkmX6ul364YJPN7z0X7/f6Sv633n91u1/VVTb7ztpjPW00goSCQUBBIKAgkFAQSCgIJBYGEgkBCQSChIJBQEEgoCCQUBBIKAgkFgYSCQEJBIKEgkFAQSLQKUmanuqH6Drl8pzaZr1WQMjvVDdV3yOWbO7NMvlZByuxUN1TfIZfv2GbztQpSZqf6nOo75PId2XS+a3h5ddkdcvmuOx8AAAAAAAAAPD7X8KMmdr6vNF8UeP7spHccFRve+W5+UPF8UeT5s5PeZ7M732cvLp4vCj1/dtL7bHbnu6F6vjLPn530dc6Ub+7MMs9fqyBLf0PUY+TMpb+h7DHy+wjynRrJV+b581YTSCgIJBQEEgoCCQWBhIJAQkEgoSCQUBBIKAgkFAQSCgIJBYGEgkBCQSChIJBQEEgoCCQUBBJ20vttcue7oXq+Ms+fnfR1zpRv7swyz5+d9D6b3fluqJ6vzPNnJ/1+m975Pqd6vij0/F3Dy6vL7mjLN71DXvr5AwAAAAAAAIDHZ9M/ahLyyfdw172THvL9n3xzmvlaP817E5cLF3dn3QxcL98x+eY08211J12+uTPl6zxzqzvp8s2dKV/nmVvdSZdv7kz5Os/0VhNIKAgkFAQSCgIJBYGEgkBCQSChIJBQEEgoCCQUBBIKAgkFgYSCQEJBIKEgkFAQSCgIJBQEElvdSZdv7kz5Os/c6k66fHNnytd55lZ30uWbO1O+zjM/b1z8dxz2rb9cLc6x24j4a+B6+Y7JN6eZz8ur2+Sb8xjyAQAAAJfyD92s8bBtlgWFAAAAAElFTkSuQmCC",
                            "width": 25,
                            "height": 25,
                            "alt": "duck"
                        },
                        "DUCK"
                    ],
                    [
                        {
                            "src": "data:image/png;base64,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",
                            "width": 25,
                            "height": 25,
                            "alt": "house"
                        },
                        "HOUSE"
                    ],
                    [
                        {
                            "src": "data:image/png;base64,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",
                            "width": 25,
                            "height": 25,
                            "alt": "tortoise"
                        },
                        "TORTOISE"
                    ],
                    [
                        {
                            "src": "data:image/png;base64,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",
                            "width": 25,
                            "height": 25,
                            "alt": "butterfly"
                        },
                        "BUTTERFLY"
                    ],
                    [
                        {
                            "src": "data:image/png;base64,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",
                            "width": 25,
                            "height": 25,
                            "alt": "stick figure"
                        },
                        "STICKFIGURE"
                    ],
                    [
                        {
                            "src": "data:image/png;base64,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",
                            "width": 25,
                            "height": 25,
                            "alt": "ghost"
                        },
                        "GHOST"
                    ],
                    [
                        {
                            "src": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE40lEQVR4nO3dMY4UVxQF0NeWnCBysBfgDbAAy3uCBJHaCd6TZedswAsAkyMSgnYwY1mjoS5V86ta7/eckzLwrrq4HiON6lYBAAAALZy+8etPq+pZVT2pqu93vv2lqj5X1ceq+vTAP6N1vvP5/HNVvaqqF1X1fL9oVVX1T1W9q6q3p9Ppzwf+Ga0/v2qQLxXkeVX9uHOoJe/r5oFv0Trf+Xx+XVW/HhPn7qmqenM6nX7b+Ptaf37VJN9SQZ5W1U+Hxfm6v2v9f2la57v9zvFHffs79F7OVfXLhu8krT+/apTvu4UvfnZsluGb3fO9qsuVo25vvdzw9d0/vzb5lgry5MAgS7bc7J7vxWEp9rnZ/fNrk2+pIHv/g2iNLTe759v7H+Rr/LDha7t/fm3yLRUEKAWBSEEgUBAIFAQCBYFAQSBQEAgUBAIFgUBBIFAQCBQEAgWBQEEgUBAIFAQCBYFAQSBYKsiXi6bYfrN7vq3vgNrDhw1f2/3za5NvqSCfDwyyZMvN7vneHZZin5vdP782+ZYK8vHAIEu23Oye723dvMztUs63N9fq/vm1ybdUkE918zrGS3lf297f2jrf7RsO39RlSvLfq0f/2vB7Wn9+1Sifl1cv2+vl1S/r5qVuW95btcaHuvnfqt+9vPpB9sgHAAAAAAAAAI+MHzVZZid9zFU8Xzvp69hJHzPt87WTvp6d9DFTPl876cfctJM+drNNPjvpx9y0kz52s00+O+nH3LSTPnazTT5vNYFAQSBQEAgUBAIFgUBBIFAQCBQEAgWBQEEgUBAIFAQCBYFAQSBQEAgUBAIFgUBBIFAQCOykH3PTTvrYzTb57KQfc9NO+tjNNvnspB9z00762M02+eykr2Mnfcy0z9fLq5fZSR9z9c8XAAAAAAAAAB4fP2qyzE76mKt4vnbS17GTPmba52snfT076WOmfL520o+5aSd97GabfHbSj7lpJ33sZpt8dtKPuWknfexmm3zeagKBgkCgIBAoCAQKAoGCQKAgECgIBAoCgYJAoCAQKAgECgKBgkCgIBAoCAQKAoGCQKAgENhJP+amnfSxm23y2Uk/5qad9LGbbfLZST/mpp30sZtt8tlJX8dO+phpn6+XVy+zkz7m6p8vAAAAAAAAADw+U/+oSfcdcvnm33Gfdie9+w65fP+fqol33KfcSe++Qy7f/ZM16Y77rDvp3XfI5btr2h33WXfSu++Qyzd2s83fv1l30rvvkMt335Q77t5qAoGCQKAgECgIBAoCgYJAoCAQKAgECgKBgkCgIBAoCAQKAoGCQKAgECgIBAoCgYJAoCAQzLqT3n2HXL77ptxxn3UnvfsOuXxjN9v8/Zt1J737Drl8d0274z7lTnr3HXL57ph6x/0aXl7ddodcvqvfcQcAAAAAAACAR2bqHzWp5vnskM//fKfdSa/m+eyQ3zHt851yJ72a57ND/lVTPt9Zd9K757NDPnazTb5Zd9K757NDPnazTb5Zd9K757NDPnazTT5vNYFAQSBQEAgUBAIFgUBBIFAQCBQEAgWBQEEgUBAIFAQCBYFAQSBQEAgUBAIFgUBBIFAQCGbdSe+ezw752M02+WbdSe+ezw752M02+WbdSe+ezw752M02+abcSa/m+eyQ3zPt8/Xy6mVXv+NezT+/6p8PAAAAuJR/ATEXlVHvyECcAAAAAElFTkSuQmCC",
                            "width": 25,
                            "height": 25,
                            "alt": "sword"
                        },
                        "SWORD"
                    ],
                    [
                        {
                            "src": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE+UlEQVR4nO3dPY4cVRQF4NtIJBY5PwtgA14AYk92gpxCYvaEIPcGWICNc+TEQRP0IGs09U6/mqqy3+v5vtRj36PSnBEW7TpVAAAAwBBO6RfP5/NPVfWyqp5X1Xc73/6nqt5U1evT6fTnY/6A0fNV1TdV9W1VPauqr/cKdudjVX2oqvdV9e8j/wz5ruRrFuR8Pv9SVb/uHGrxVFW9Op1Ov636TYPnq0thfzggz5K3dSn0GvJ90sy3WJC7n8x/tH79AOeq+rn3J/Xo+eryk+/HA/Ms+bv6f1LL99Bivq8aX/yyPt83X93derHi60fP9+1RQXa6KV/nzVZBnh8YpGXNzdHzPTssxT435eu82SrI3n/h7fH9iq8dPd/ef6Hc+6Z8nTdbBQFKQSBSEAgUBAIFgUBBIFAQCBQEAgWBQEEgUBAIFAQCBYFAQSBQEAgUBAIFgUBBIFAQCFoFWfsOoz28W/G1o+f7eFiKfW7K13mzVZA3BwZpWXNz9HwfDkuxz035Om+2CvK6Li9L+1zOdzd7jZ7v/VFBdropX+fNxYLcvUHwVX2eb8L/X+35V+9vGD1fXd7Q9/agPEve1rr338p3XzNfz8urX9TlpWlr3gvV411d/rPl940vrx42Xw3w8uUr5NuWDwAAAAAAAACemGtDmEP/r3476Tf/UY4vni8VZIid6hY76fdMu0MeDJGvVZBhdqqX2ElfNOUOecMw+Vr/HmSYneoGO+nbbsrXebNVkGF2qhvspG+7KV/nzVZBhtmpbrCTvu2mfJ03vdUEAgWBQEEgUBAIFAQCBYFAQSBQEAgUBAIFgUBBIFAQCBQEAgWBQEEgUBAIFAQCBYFAQSBoFWSYneoGO+nbbsrXebNVkGF2qhvspG+7KV/nzVZBhtmpbrCTvu2mfJ03WwUZZqd6iZ30B6bdIW8YJt8tvLzaTvrEL4e+YvR8AAAAAAAAAPDE3MJHTeyk3+5HOb54PjvpHafKTvpW0+azk97HTvp2U+azk97HTvp2U+azk37MzdGfn3ydN+2k97OTvs2U+bzVBAIFgUBBIFAQCBQEAgWBQEEgUBAIFAQCBYFAQSBQEAgUBAIFgUBBIFAQCBQEAgWBQEEgsJPez076NlPms5N+zM3Rn598nTftpPexk77dlPnspF9nJ327afPdwsur7aRP/HLoK0bPBwAAAAAAAABPzC181GTYnXT55t+Zt5PecaoesZMu36dTNfHOvJ30Pqt20uV7eLIm3Zm3k95n7U66fPdNuzNvJ/2Ym/JtuznM95+d9H5r/r2JfA9NuTPvrSYQKAgECgKBgkCgIBAoCAQKAoGCQKAgECgIBAoCgYJAoCAQKAgECgKBgkCgIBAoCAQKAoGd9H5rdtLle2jKnXk76cfclG/bzWG+/+yk91m7ky7ffdPuzNtJv271Trp890y9M38LL68ediddvpvfmQcAAAAAAACAJ+YWPmpi59vzeww76TuZeue7xfO7x076RtPufC/x/BbZSd9g2p3vBs+v86ad9GNuen7bbg7z/Oyk95ty57vB8+u86a0mECgIBAoCgYJAoCAQKAgECgKBgkCgIBAoCAQKAoGCQKAgECgIBAoCgYJAoCAQKAgECgKBnfR+U+58N3h+nTftpB9z0/PbdnOY52cnvc+0O98Nnl/nTTvp1029873E83vATvoj3PzOt+dnJx0AAACm8R/nWLbllDXkpAAAAABJRU5ErkJggg==",
                            "width": 25,
                            "height": 25,
                            "alt": "giraffe"
                        },
                        "GIRAFFE"
                    ],
                    [
                        {
                            "src": "data:image/png;base64,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",
                            "width": 25,
                            "height": 25,
                            "alt": "skull"
                        },
                        "SKULL"
                    ],
                    [
                        {
                            "src": "data:image/png;base64,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",
                            "width": 25,
                            "height": 25,
                            "alt": "umbrella"
                        },
                        "UMBRELLA"
                    ],
                    [
                        {
                            "src": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFE0lEQVR4nO3dMY5bVRQG4GMQTTTUARbAAsgCIvaUNCgtNGFPCPqwABYwIQ1VlCIpTGHDYOx75r6571nnvfm+djxzfl35t8aSfU8EAAAAUMIu++F+v38eES8j4llEfDXz7D8j4k1EvN7tdr8+5A9UzxcRNxHxNCKeRMQXcwU7+hQRHyLiXUS8f+DfkO+efM2C7Pf7HyLix5lDXRwVEa92u91Pk36peL44FPabBfJcchuHQk8h351mvosFOb4y/9L6+QL2EfF97yt19XxxeOX7dsE8l/wR/a/U8p27mO+zxoNfxvWefHGc9WLC46vne7pUkJlmytc5s1WQZwsGaZkys3q+J4ulmGemfJ0zWwWZ+w1vj68nPLZ6vrnfUM49U77Oma2CAKEgkFIQSCgIJBQEEgoCCQWBhIJAQkEgoSCQUBBIKAgkFAQSCgIJBYGEgkBCQSChIJBQEEi0CjL1DqM5vJ3w2Or5Pi2WYp6Z8nXObBXkzYJBWqbMrJ7vw2Ip5pkpX+fMVkFex+GytGvZH2f2qp7v3VJBZpopX+fMiwU53iD4Kq7zJPznas/fen+her443NB3u1CeS25j2v238p1q5uu5vPpFHC5Nm3IvVI+3cfi35efBy6vL5osCly/fQ76xfAAAAAAAAADwyNiT3rb5PenVz69CPnvSO0bFBvekVz+/KvnsSe+zqT3p1c+vUj570vtsbU969fMrk8+e9GVmltnz3VD9/Mrka/2Ldc1v6/1rt9t1vWpUzxcR3y0apO33ngdVP79K+dxqAgkFgYSCQEJBIKEgkFAQSCgIJBQEEgoCCQWBhIJAQkEgoSCQUBBIKAgkFAQSCgIJBYGEgkDCnvR+W9qTXv38yuSzJ32ZmWX2fDdUP78y+exJ77O1PenVz69MPnvS77e5PenVz69SPnvS2za/J736+VXPBwAAAAAAAACPz30rsdbwUYmye77D+a3+/LKC2PN9HBX2pI9Y9fm1CmLP9/9Ghj3pI1Z7fq3vg9jzfcqe9DGrPb9WQez5Hpvp/MZmljm/VkHmfkPUY8rMud9Q9pjyfQTnd26V5+dWE0goCCQUBBIKAgkFgYSCQEJBIKEgkFAQSCgIJBQEEgoCCQWBhIJAQkEgoSCQUBBIKAgkFAQSrYLY833OnvQxqzy/VkHs+R6b6fzGZpY5v1ZB7Pk+ZU/6mNWeX6sg9nzfsSd9zKrPbwuXV1feo+38Nnx+AAAAAAAAAPD4bOGjJmX3fMtnT/pcNrfnW767UWFP+iw2s+dbvvORYU/6sC3t+ZbvlD3pM9jSnm/5xmaWef7Zk95vyvcl5DtnTzpsjYJAQkEgoSCQUBBIKAgkFAQSCgIJBYGEgkBCQSChIJBQEEgoCCQUBBIKAgkFgYSCQEJBIGFPer8pe77lO2dP+qAt7fmWb2xmmeefPel9pu75lu+UPemDNrXnW74T9qQ/0Ob3fMtnTzoAAAAAAAAAbMuqP2oS8sn3cNvekx7y/Zd8Y5r5Wp/mvYnrhYvjrJsJj5fvlHxjmvnWuiddvrGZ8nXOXOuedPnGZsrXOXOte9LlG5spX+dMt5pAQkEgoSCQUBBIKAgkFAQSCgIJBYGEgkBCQSChIJBQEEgoCCQUBBIKAgkFgYSCQEJBIKEgkFjrnnT5xmbK1zlzrXvS5RubKV/nzLXuSZdvbKZ8nTM/bzz4Yxz2W3+5WJxTtxHx14THy3dKvjHNfC6vbpNvzGPIBwAAAFzL3/Yj4OZvgj/VAAAAAElFTkSuQmCC",
                            "width": 25,
                            "height": 25,
                            "alt": "snake"
                        },
                        "SNAKE"
                    ],
                    [
                        {
                            "src": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE50lEQVR4nO3dTW4UVxQF4FuRMkHMIVlAFgALiLInmERMkwnZU5TMYQFZAD9zxIRBZ2AH3O5+J1V+Va3Xpe8bGtv36prTsiW7ThUAAAAwhCn94+Fw+LmqXlbV86p6uvLsD1X1pqpeT9P01wM/x+OqelJVj6rq+7UWu/Wlqj5X1ceq+vSQT+B+fferAfZrBuRwOPxaVb+tvNTZUVX1apqm3xd+3NOq+nGDfc55Vzf/IWdzvyOL71eD7Hc2ILevfH+2/n0Dh6r6ZcEr4eOq+mnDfc75p2a+ErrfWbPvVwPt913jnV/W5b64dTvrxYL3f7LVIivNdL++mcPs1wrI8w0XaVky89FmW6wz0/36Zg6zXysga/9AOccPC9537R/Y1p7pfn0zh9mvFRCgBAQiAYFAQCAQEAgEBAIBgUBAIBAQCAQEAgGBQEAgEBAIBAQCAYFAQCAQEAgEBAIBgaAVkKXPMFrD+wXv+2WzLdaZ6X59M4fZrxWQNxsu0rJk5ufNtlhnpvv1zRxmv1ZAXtfNw8gu5XA7c66PWy2y0kz365s5zH5nA3L7hL5XdZkv8n+Pzvx7wcd8qpvHRV7Ku1rwfFn3O7HofjXQfnMeXv2ibh5KtuS5S3O8r5tvC/7Y68OX3e/6H14NAAAAAAAAANylJ71NT3qfXfyqiZ70efSk99GT3mlXPd/ud5ae9A576/l2v76Zw+ynJ32bme7XN3OY/fSkbzPT/fpmDrOfp5pAICAQCAgEAgKBgEAgIBAICAQCAoGAQCAgEAgIBAICgYBAICAQCAgEAgKBgEAgIBAICAR60reZ6X59M4fZT0/6NjPdr2/mMPvpSd9mpvv1zRxmPz3p8+hJ76Mn/QF23/Ptftf/8GoAAAAAAAAA4K6r7km33773qwF+1eRqe9Lt921U7XC/0pN+PLIW9Hzb73Rk7Wi/0pN+YmnPt/2O7W0/PemdM+3XN3P0/YbpSW99i3XJv4b7apqmWa9q9jtvL/tV1bNNF2l7e/8NnmoCgYBAICAQCAgEAgKBgEAgIBAICAQCAoGAQCAgEAgIBAICgYBAICAQCAgEAgKBgEAgIBBca0+6/U7taT896Z0z7dc3c/T99KTfs7Tn237H9rafnvQ7Fvd82+/I7vYrPelVtULPt/32vV8N8PBqAAAAAAAAAOAuPeltu+j5TtxPT/oarrrnu8X9juhJ73S1Pd/nuN9ZetI7XG3Pd4P7zZypJ32bmcP0fDe438yZrYCs/QPbHEv+HmH0/db+gXLtme43c6anmkAgIBAICAQCAoGAQCAgEAgIBAICgYBAICAQCAgEAgKBgEAgIBAICAQCAoGAQCAgEAgIBHrS57vKnu8G95s5U0/6NjOH6flucL+ZM/Wkz3O1Pd8N7jdzpp70/3fVPd/nuN8JPekPsPueb/fTkw4AAAAAAAAAy+hJb7NfHz3pK9llT7r9vo0qPenddtWTbr/TkaUnvcveetLtd0xP+gr21JNuv76Zw/Skt77FuuRfm301TdOsVzX7nbeX/arq2aaLtL29/wZPNYFAQCAQEAgEBAIBgUBAIBAQCAQEAgGBQEAgEBAIBAQCAYFAQCAQEAgEBAIBgUBAIBAQCPSkz2e/PnrSO+2pJ91+fTP1pN+zt550+x3Tk95hdz3p9juiJ/2Bdt+Tbj896QAAAMBK/gVsdTwSu+HRwQAAAABJRU5ErkJggg==",
                            "width": 25,
                            "height": 25,
                            "alt": "rabbit"
                        },
                        "RABBIT"
                    ],
                    [
                        {
                            "src": "data:image/png;base64,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",
                            "width": 25,
                            "height": 25,
                            "alt": "cow"
                        },
                        "COW"
                    ],
                    [
                        {
                            "src": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE8ElEQVR4nO3dQY4VZRQF4PtMnBDmoAtwAyzAuCeYEKY6wT0ZnbMBFwAyJ0wYPAfdxnTaOl3V/1/P+4rvm1pwT97LAUk6daoAAACAFk4P/PenVfWsqp5U1beTb3+pqs9V9bGqPj3y92id73w+/1hVr6rqRVU9nxetqqr+qqp3VfX2dDr9/sjfo/XnVw3ypYI8r6rvJ4da8r5uvvAtWuc7n8+vq+rnfeLcPVVVb06n0y8bf13rz6+a5FsqyNOq+mG3OP/tz1r/J03rfLd/c/xWD/8NPcu5qn7a8DdJ68+vGuX7ZuHhZ/tmGb7ZPd+rulw56vbWyw3Pd//82uRbKsiTHYMs2XKze74Xu6WYc7P759cm31JBZv+DaI0tN7vnm/0P8jW+2/Bs98+vTb6lggClIBApCAQKAoGCQKAgECgIBAoCgYJAoCAQKAgECgKBgkCgIBAoCAQKAoGCQKAgECgIBEsF+XLRFNtvds+39R1QM3zY8Gz3z69NvqWCfN4xyJItN7vne7dbijk3u39+bfItFeTjjkGWbLnZPd/bunmZ26Wcb2+u1f3za5NvqSCf6uZ1jJfyvra9v7V1vts3HL6py5Tkn1eP/rHh17T+/KpRPi+vXjbr5dUv6+alblveW7XGh7r536pfvbz6UWbkAwAAAAAAAICvjB81WWYnfcwhvl876evYSR9ztd+vnfT17KSPucrv1076PjftpI/dbJPPTvo+N+2kj91sk89O+j437aSP3WyTz1tNIFAQCBQEAgWBQEEgUBAIFAQCBYFAQSBQEAgUBAIFgUBBIFAQCBQEAgWBQEEgUBAIFAQCO+n73LSTPnazTT476fvctJM+drNNPjvp+9y0kz52s00+O+nr2Ekfc7Xfr5dXL7OTPubw3y8AAAAAAAAAfH38qMkyO+ljDvH92klfx076mKv9fu2kr2cnfcxVfr920ve5aSd97GabfHbS97lpJ33sZpt8dtL3uWknfexmm3zeagKBgkCgIBAoCAQKAoGCQKAgECgIBAoCgYJAoCAQKAgECgKBgkCgIBAoCAQKAoGCQKAgENhJ3+emnfSxm23y2Unf56ad9LGbbfLZSd/npp30sZtt8tlJX8dO+pir/X69vHqZnfQxh/9+AQAAAAAAAODrE3/UpPvOt3x20geM7aR33/mW799TZSd91Lad9O473/LdP1l20kdt2knvvvMt31120sdt2knvvvMt39jNNjvkE56dZdNOevedb/nus5M+xk46bKUgECgIBAoCgYJAoCAQKAgECgKBgkCgIBAoCAQKAoGCQKAgECgIBAoCgYJAoCAQKAgESwXpvvMt33120sds2knvvvMt39jNNjvkE56dZdNOevedb/nuspM+bv1Oevedb/nusJM+7nE76d13vuWzkz7ATjoAAAAAAAAAbGYnfdnh81X/H+X43/PZSV9xqg6Yr5rskAct8tlJX+dQ+arRDvmCNvnspK9ztHxtdsgnPDuLnfRBR8rXZod8wrOz2EkfdKR8bXbIJzw7i5102EpBIFAQCBQEAgWBQEEgUBAIFAQCBYFAQSBQEAgUBAIFgUBBIFAQCBQEAgWBQEEgUBAI7KSvd6R8bXbIJzw7i530QUfK12aHfMKzs9hJH3C0fG12yCc8O4ud9Ec6XL5qtEO+oE0+O+nLDp+vGrwc+gHd8wEAAACX8jdzZLbl0C/0iwAAAABJRU5ErkJggg==",
                            "width": 25,
                            "height": 25,
                            "alt": "quarter note"
                        },
                        "MUSIC_CROTCHET"
                    ],
                    [
                        {
                            "src": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFM0lEQVR4nO3dQY4VVRgF4P+ZOCHMQRfgBliAcU8wMUx1gnsyOmcDLgBkTpgweA66JXa6799V/W61J5fvm1pwT27lgCSdOlUAAABAhNM9//1pVT2rqidV9e3ksz9X1aeq+lBVHx/4e0TnO5/PP1bVq6p6UVXP50Wrqqq/q+ptVb05nU5/PPD3iL6/CsjXFeR5VX0/OdTIu7p64XtE5zufzz9X1S/HxLl5VFW9Pp1Ov+78ddH3VyH5RgV5WlU/HBbnbn/V9j9povNd/83xe93/N/Qs56r6acffJNH3V0H5vhk8/OzYLBefmZ7vVT1eOer6rJc7nk+/v5h8o4I8OTDIyJ4z0/O9OCzFnDPT7y8m36ggs/9BtMWeM9Pzzf4H+Rbf7Xg2/f5i8o0KApSCQEtBoKEg0FAQaCgINBQEGgoCDQWBhoJAQ0GgoSDQUBBoKAg0FAQaCgINBYGGgkBDQaAxKsjnR02x/8z0fHu/ATXD+x3Ppt9fTL5RQT4dGGRkz5np+d4elmLOmen3F5NvVJAPBwYZ2XNmer43dfUxt8dyvj5zq/T7i8k3KsjHuvoc42N5V/u+3xqd7/oLh6/rcUry76dH/9zxa6Lvr4Ly+Xj12KyPV7+sq4+67flu1Rbv6+p/q37z8eoHmZEPAAAAAAAAAL4yftRkbPmd9PR8FfB+7aRvs9xOenq+Cnm/dtK3W2YnPT1fBb1fO+nHnJm+k56eL+b92kk/5sz0nfT0fDHv1076MWem76Sn54t5v75qAg0FgYaCQENBoKEg0FAQaCgINBQEGgoCDQWBhoJAQ0GgoSDQUBBoKAg0FAQaCgINBYGGgkDDTvoxZ6bvpKfni3m/dtKPOTN9Jz09X8z7tZN+zJnpO+np+WLer530bZbaSU/PV0Hv18erx5bfSU/PV+HvFwAAAAAAAAC+Pn7UZGz5nfRyf/fen530bZbbSS/39+Woau7PTvp2y+ykl/u7dWQN7s9O+jFn2iG/7MyY+7OTfsyZdsgvOzPm/uykH3OmHfLLzoy5P181gYaCQENBoKEg0FAQaCgINBQEGgoCDQWBhoJAQ0GgoSDQUBBoKAg0FAQaCgINBYGGgkBDQaBhJ/2YM+2QX3ZmzP3ZST/mTDvkl50Zc3920o850w75ZWfG3J+d9G2W2kkv9/df7f35ePXY8jvp5f4uvT8AAAAAAAAA+Mq0P2qSsFPdkW/tnfQKyDcsSMpO9fAXyfflqFpwJ71C8t1ZkKSd6jsflu/WkbXQTnoF5Rv9uHvMTvWAfDettpMek29UkJid6gnPzrJSvvSd9Jh8o4LE7FQPyHfbSjvpMfl81QQaCgINBYGGgkBDQaChINBQEGgoCDQUBBoKAg0FgYaCQENBoKEg0FAQaCgINBQEGgoCDQWBxqggMTvVA/LdttJOeky+UUFidqonPDvLSvnSd9Jj8o0KErNTPSDfTavtpMfku7MgSTvVd5HvhuV20iso35aPV8fuVMu39k565ecDAAAAAAAAgK+MnfSx5fNV/o9y/O/57KRvOKoWzFchO+SNiHx20rdZKl8F7ZAPxOSzk77NavlidsgnPDuLnfQLrZQvZod8wrOz2Em/0Er5YnbIJzw7i5102EtBoKEg0FAQaCgINBQEGgoCDQWBhoJAQ0GgoSDQUBBoKAg0FAQaCgINBYGGgkBDQaChINCwk77dSvlidsgnPDuLnfQLrZQvZod8wrOz2Em/wGr5YnbIJzw7i530B1ouXwXtkA/E5LOTPrZ8vgr4OPQ90vMBAAAAj+Uf73PYeRwCFc4AAAAASUVORK5CYII=",
                            "width": 25,
                            "height": 25,
                            "alt": "eigth note"
                        },
                        "MUSIC_QUAVER"
                    ],
                    [
                        {
                            "src": "data:image/png;base64,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",
                            "width": 25,
                            "height": 25,
                            "alt": "pitchfork"
                        },
                        "PITCHFORK"
                    ],
                    [
                        {
                            "src": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFeElEQVR4nO3dMY5bVRgF4N9INFH6BBbAAsgCEHtKGpQWmrAnBH1YAAtISB+lSWGKGYiMff/xm/dsnTvzfW08uUfP72QykuedKgAAACDC7o4/f1pVz6rqSVV9vfHZn6vqU1V9qKqP9/w7ovPt9/sfqupVVb2oqufbRauqqr+r6m1Vvdntdr/f8++Ivn4VkK8ryPOq+nbjUCPv6uYNXyI6336//6mqfr5MnMOjqur1brf7ZeHXRV+/Csk3KsjTqvruYnFO+6vO/5cmOt/td47f6u7v0FvZV9WPC76TRF+/Csr31eDFzy6bZfWZ6fle1fXKUbdnvVzw+vTrF5NvVJAnFwwysuTM9HwvLpZimzPTr19MvlFBtv6B6BxLzkzPt/UP5Of4ZsFr069fTL5RQYBSEGgpCDQUBBoKAg0FgYaCQENBoKEg0FAQaCgINBQEGgoCDQWBhoJAQ0GgoSDQUBBoKAg0RgX5fNUUy89Mz7f0GVBbeL/gtenXLybfqCCfLhhkZMmZ6fneXizFNmemX7+YfKOCfLhgkJElZ6bne1M3D3O7lv3tmedKv34x+UYF+Vg3j2O8lne17Pmt0flun3D4uq5Tkn8fPfrHgq+Jvn4VlM/Dq8e2enj1y7p5qNuS51ad433d/LfqVw+vvpct8gEAAAAAAADAIzP1R03Sd8jlm3/Hfdqd9PQdcvm+HFUT77hPuZOevkMu3/GRNemO+6w76ek75PIdmnbHfdad9PQdcvnWnRlz/826k56+Qy7fsSl33D3VBBoKAg0FgYaCQENBoKEg0FAQaCgINBQEGgoCDQWBhoJAQ0GgoSDQUBBoKAg0FAQaCgINBYHGrDvp6Tvk8h2bcsd91p309B1y+dadGXP/zbqTnr5DLt+haXfcp9xJT98hl+/A1DvuD+Hh1bE75PI9+B13AAAAAAAAAHhk2o+apO9op+er8I9KpF+/hHzDgqTvaKfnq5Cd75H065eS72RB0ne00/NV0M73KenXLynf6OPu6Tva6flidr4H0q9fTL5RQdJ3tNPzxex8D6Rfv5h8o/9iXfO3zf6z2+3O+lcjPV9VfX/RIGN/nvOi9OuXlM9TTaChINBQEGgoCDQUBBoKAg0FgYaCQENBoKEg0FAQaCgINBQEGgoCDQWBhoJAQ0GgoSDQUBBojAqSvqOdni9m53sg/frF5BsVJH1HOz1fzM73QPr1i8k3Kkj6jnZ6vpid74H06xeT72RB0ne00/NV0M73KenXLynfOQ+vjt3RTs9Xczy8Ovb6pecDAAAAAAAAgMfnrkmsGT4qYef7geargPuvK4id79ujauKd7+EXheerkPtvVBA73/87sibd+T754vB8FXT/jX4fxM73oWl3vgfS88Xcf6OC2Pled6Z8686Muf9GBdn6B6JzLDlz6x8oz7Hk9xHkO7YkX8z956km0FAQaCgINBQEGgoCDQWBhoJAQ0GgoSDQUBBoKAg0FAQaCgINBYGGgkBDQaChINBQEGgoCDRGBbHzfWzKne+B9Hwx99+oIHa+150p37ozY+6/UUHsfB+adud7ID1fzP03Koid7y+m3vk+JT1fBd1/D+Hh1bE72vI97J15AAAAAAAAAHh8pv6oSYXns0M+//s77U56heezQ35g2vd3yp30Cs9nh/ykKd/fWXfS0/PZIV93Zky+WXfS0/PZIV93Zky+WXfS0/PZIV93Zkw+TzWBhoJAQ0GgoSDQUBBoKAg0FAQaCgINBYGGgkBDQaChINBQEGgoCDQUBBoKAg0FgYaCQENBoDHrTnp6Pjvk686MyTfrTnp6Pjvk686MyTfrTnp6Pjvk686MyTflTnqF57NDfmTa99fDq8ce/I57hV+/ys8HAAAAXMs/4tr5dC58svsAAAAASUVORK5CYII=",
                            "width": 25,
                            "height": 25,
                            "alt": "target"
                        },
                        "TARGET"
                    ],
                    [
                        {
                            "src": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFX0lEQVR4nO3dsW5URxQG4LNBNJapTXiAvAAPYOWdoEG0SUPeJumjpOcF8gA2bqiQCywxKXYBrfAcZjz3LrP297Xc3fNrpN+LpfWcCAAAAGAKm+/8+2lEnEXESUQ8Xnj2TURcR8RVRHy443vIJ99dNeXLCvI0Ip4tHKrmIiLedb5Gvq/kG1PN91PlBadxuHCxm3Xa8bx8++QbU81XK8jZelmqembKNzZTvsaZtYKcrBikpmemfGMz5WucWSvI0r8QteiZKd/YTPkaZ9YKAoSCQEpBIKEgkFAQSCgIJBQEEgoCCQWBhIJAQkEgoSCQUBBIKAgkFAQSCgIJBYGEgkBCQSBRK8jNQVP0z5RvbKZ8jTNrBbleMUhNz0z5xmbK1zizVpCrFYPU9MyUb2ymfI0zH1Ue/hgRJSKerBZn30VEvO94Xr598o2p5nN5dZ18Yx5CPgAAAAAAAAB4YHzVpG44XynlPCJeRsTz2K41XtK7iHgbEW82m80/d3yPqc8vJshnT3qb7nyllFcR8ds6cfZHRcTrzWbze+frpj6/mCRfrSCnEfHLanFu91+0/6SZOt/uk+Pv+P4n9FJKRPza8Uky9fnFRPnsSV9n5ss4XDliN+tFx/Ozn980+exJX2fm89VSLDNz9vObJp896evMXPoX8hY/dzw7+/lNk8+tJpBQEEgoCCQUBBIKAgkFgYSCQEJBIKEgkFAQSCgIJBQEEgoCCQWBhIJAQkEgoSCQUBBIKAgk7ElfZ2bvHVBLuOx4dvbzmyafPenrzHy7WoplZs5+ftPksyd9nZlvYnuZ26GU3cxWs5/fNPlqBfkQ2+sYD+Ui+u5vnTrf7obD13GYkny+evTfjtdMfX4xUT6XV9ctdXn1i9he6tZzb1WLy9j+t+oPl1ffiT3pAAAAAAAAANDtqL9qYg+58xtwv/ek20O+x/mNuV970u0hv5XzG3Ov9qTbQz420/k1zjzWPen2kI/NdH6NM491T7o95GMznV/jTLeaQEJBIKEgkFAQSCgIJBQEEgoCCQWBhIJAQkEgoSCQUBBIKAgkFAQSCgIJBYGEgkBCQSChIJA41j3p9pCPzXR+jTOPdU+6PeRjM51f48xj3ZNuD/nYTOfXOPMo96TbQ/4N5zfmfu5Jt4fc+Q2wJx0AAAAAAAAAllVKOS+l/FVKuSzLu9y997l88h1dvlLKqxVC3eZT2e7slk++48hXts39dKCAn0M2N1k++Q6Vr/Z199n3aMu3T74x1Xy1gsy+R1u+sZnyNc68taWllEP+tdkXm82m6aeGfLeTb8xt+dxqAgkFgYSCQEJBIKEgkFAQSCgIJBQEEgoCCQWBhIJAQkEgoSCQUBBIKAgkFAQSCgIJBYGEgkCiVpDZ92jL9y35xtyar1aQ2fdoyzc2U77GmbWCzL5HW7598o3pzffl6sdD3G43cjWlfPL9kHyfQ56XUv4spVysEOxi996jlxvLJ98PyQcAAAAAAAAAD8/3VmKdRsRZRJxExOOFZ99ExHVEXEXEhzu+h3zy3VVTvqwgTyPi2cKhai6i/28A5PtKvjHVfLWvu5/G4cLFbtZpx/Py7ZNvTDVfrSBn62Wp6pkp39hM+Rpn1gpysmKQmp6Z8o3NlK9xZq0gS/9C1KJnpnxjM+VrnOlWE0goCCQUBBIKAgkFgYSCQEJBIKEgkFAQSCgIJBQEEgoCCQWBhIJAQkEgoSCQUBBIKAgkFAQStYLcHDRF/0z5xmbK1zizVpDrFYPU9MyUb2ymfI0zawW5WjFITc9M+cZmytc481Hl4Y+xXa7+ZLU4+y4i4n3H8/Ltk29MNZ/Lq+vkG/MQ8gEAAACH8j9qsKYdhQgxPgAAAABJRU5ErkJggg==",
                            "width": 25,
                            "height": 25,
                            "alt": "triangle"
                        },
                        "TRIANGLE"
                    ],
                    [
                        {
                            "src": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFGklEQVR4nO3dPY4UVxQG0NuWnCBysBfgDbCAkfcECSK1E7wbO7fsnA14ATOQIxIknoPuAY+m6rpq6lVzX3NOOtV9P1Xpmx+p590IAAAAoIRD9sXW2lVEvIiIZxHxtPPstxHxJiJeHw6Hvx74Ho8j4klEPIqI73sFO/kYER8i4l1EvH/ge8g3eL7ZgrTWXkbEL51DTY6KiFeHw+HXla97GhE/7pBnynUcC72GfF8Mm2+yIKefHH/OfX0HLSJ+XvGT5HFE/LRjnin/xPLvhPLdN2S+72YufhHnK0ecZj1fcf2TvYJ0minftpll8s0V5NmOQeasmflotxR9Zsq3bWaZfHMF6f0H+RI/rLi29x9svWfKt21mmXxzBQFCQSClIJBQEEgoCCQUBBIKAgkFgYSCQEJBIKEgkFAQSCgIJBQEEgoCCQWBhIJAQkEgoSCQmCvI2jOMerhZce3H3VL0mSnftpll8s0V5M2OQeasmflhtxR9Zsq3bWaZfHMFeR3Hw9zOpZ1mLvVuryCdZsq3bWaZfJMFOZ1w+CrOU5Lbo0f/XvGa93E8LvJcrmPd+bLy3TVsviWHVz+P46Fua86tWuImjr9W/ebw6geRb5se+QAAAAAAAADgGzP0nvTq+aL+RyXku9Q96dXzRZE93wn5vrisPenV80WhPd8z5LvvovakV89XZs93h2t7GTLfqHvSq+crs+e7w7W9DJlv1D3p1fOV2fPd4dpehsznVBNIKAgkFAQSCgIJBYGEgkBCQSChIJBQEEgoCCQUBBIKAgkFgYSCQEJBIKEgkFAQSCgIJBQEEqPuSa+er8ye7w7X9jJkvlH3pFfPV2bPd4drexky36h70qvnK7Pnu8O1vQyZb8g96dXzRaE93zPku+sy96RXzxcFDl/+H/LZkw4AAAAAAAAAKwy9Jz2KfxTB/Rv/oybD7kmPInu057h/d9iTvtFF7SF3/ybZk77Bpe0hd/+2zSyTb9Q96WX2aM9w/7bNLJNv1D3pZfZoz3D/ts0sk8+pJpBQEEgoCCQUBBIKAgkFgYSCQEJBIKEgkFAQSCgIJBQEEgoCCQWBhIJAQkEgoSCQUBBIKAgkRt2TXmaP9gz3b9vMMvlG3ZNeZo/2DPdv28wy+Ubdk15mj/YM92/bzDL5htyTHoX2aE9x/+6xJ/0BLn4Pufs3/uHVAAAAAAAAAMB/2ZM+7+I/KuH52pPey7B7vud4vnfYk97BkHu+p3i+k+xJ32jIPd8zPN+FM+1J32dm9Xye78KZ9qTvM7N6Ps934UynmkBCQSChIJBQEEgoCCQUBBIKAgkFgYSCQEJBIKEgkFAQSCgIJBQEEgoCCQWBhIJAQkEgoSCQsCd9n5nV83m+C2fak77PzOr5PN+FM+1J32dm9Xye78KZ9qQvM+ye7yme7z32pD/At3J4tedrTzoAAAAAAAAA9NBau2qt/dFau2n93Zze+0o++YbL11p7uUOoKZ/acWe3fPKNka8dm/vpTAFvQy5usnzynSvfqHvS5btLvm1m8426J12+bTPlWzhzsqWttXP+t9lnh8Nh0XcN+abJt81UPqeaQEJBIKEgkFAQSCgIJBQEEgoCCQWBhIJAQkEgoSCQUBBIKAgkFAQSCgIJBYGEgkBCQSChIJAYdU+6fPfJt81kvlH3pMu3baZ8C2eOuiddvrvk22Ztvs9HP57jdLstR1PKJ99XyXcb8qq19ntr7XqHYNen9956uLF88n2VfAAAAMAZ/QsAIPjNRI6mtwAAAABJRU5ErkJggg==",
                            "width": 25,
                            "height": 25,
                            "alt": "left triangle"
                        },
                        "TRIANGLE_LEFT"
                    ],
                    [
                        {
                            "src": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE7klEQVR4nO3dMY5TZxQF4OtIaRA9JAvIBlhAlD1BE9EmDdlTlPRsIAuA0CMaCqcYRyNj/2f85trW+z3f1zJwnw46A0jmnSoAAABgFTYP/PjzqnpRVc+q6vsz3/5aVV+q6lNVfX7ML7Ddbn+uqjdV9aqqXp7v0aqq6t+qel9V7zabzV+P/DXkN3l+qSAvq+rHMz/UyIe6C/Rk2+3216r67TKPs3+qqt5uNpvfF/48+e1O1cT5jQryvKp+utjjHPdPnfidcPed7896+E/Ac9lW1S8LvhPK75uTNWl+3w2++MVln6V9801d7ze3drdeL/h6+e2bNr9RQZ5d8EFGltx8dbGnOM9N+fVuria/UUHO/Q+iUyy5ee5/UJ7ihwVfK79DU+Y3KghQCgKRgkCgIBAoCAQKAoGCQKAgECgIBAoCgYJAoCAQKAgECgKBgkCgIBAoCAQKAoGCQDAqyNerPsXym4veAXUmHxd8rfwOTZnfqCBfLvggI0tuvr/YU5znpvx6N1eT36ggny74ICNLbr6ru5eRXct2d/NU8ts3bX6jgnyuu9cxXsuHWvB+2d0b+t7WdX6T/3915t8Lfo787k2d3y28vPp13b2UbMl7l07xse7+WvDHzC9fTuTXyw8AAAAAAAAAnp74URM72nbIG24iv2FB7GjvsUPeM21+RwtiR/soO+Q9U+Y3+ri7He3eTfn1bq4mv1FB7Gj3bsqvd3M1+Y0KYke7d1N+vZuryc9bTSBQEAgUBAIFgUBBIFAQCBQEAgWBQEEgUBAIFAQCBYFAQSBQEAgUBAIFgUBBIFAQCBQEglFB7Gj3bsqvd3M1+Y0KYke7d1N+vZuryW9UEDvavZvy691cTX5HC2JH+4Ad8p5p8zvl5dV2tO2QP8ZTyA8AAAAAAAAAnpiHhhJn+CiCHXL5PcZJ+aWC2NHenSo75B1T5zcqiB3tb06WHfKOafMb/X8QO9r77JD3TJvfqCB2tHs35de7uZr8RgWxo33IDnnPlPl5qwkECgKBgkCgIBAoCAQKAoGCQKAgECgIBAoCgYJAoCAQKAgECgKBgkCgIBAoCAQKAoGCQDAqiB3tQ3bIe6bMb1QQO9q9m/Lr3VxNfqOC2NHeZ4e8Z9r8RgWxo33PDnnP1Pndwsur17yjLb8bzg8AAAAAAAAAnp74URM72nbIG24iv2FB7GjvsUPeM21+RwtiR/soO+Q9U+Y3+ri7He3eTfn1bq4mv1FB7Gj3bsqvd3M1+Y0KYke7d1N+vZuryc9bTSBQEAgUBAIFgUBBIFAQCBQEAgWBQEEgUBAIFAQCBYFAQSBQEAgUBAIFgUBBIFAQCBQEglFB7Gj3bsqvd3M1+Y0KYke7d1N+vZuryW9UEDvavZvy691cTX5HC2JH+4Ad8p5p8zvl5dV2tO2QP8ZTyA8AAAAAAAAAnpiHhhJn+CiCHXL5PcZJ+aWC2NHenSo75B1T5zcqiB3tb06WHfKOafMb/X8QO9r77JD3TJvfqCB2tHs35de7uZr8RgWxo33IDnnPlPl5qwkECgKBgkCgIBAoCAQKAoGCQKAgECgIBAoCgYJAoCAQKAgECgKBgkCgIBAoCAQKAoGCQDAqiB3tQ3bIe6bMb1QQO9q9m/Lr3VxNfqOC2NHeZ4e8Z9r8RgWxo33PDnnP1Pndwsur17yjLb8bzg8AAAC4ov8AwGjpQ+5xFXQAAAAASUVORK5CYII=",
                            "width": 25,
                            "height": 25,
                            "alt": "chess board"
                        },
                        "CHESSBOARD"
                    ],
                    [
                        {
                            "src": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFF0lEQVR4nO3dMY4UZxAF4BpLThA52AfwBTiA5TtBYpHaCb6TZedcwAcAkyMSgnGwa9nDzv+2e/+ZVXXzfSm7VKlmHgvS0K8KAAAAaOFwz68/rapnVfWkqr698OzPVfWpqj5U1ccH/h6t9zsejz9W1auqelFVzy+3WlVV/V1Vb6vqzeFw+OOBv0fr+1WD/VJAnlfV9xdeauRd3bzga7Te73g8/lxVv1xnndNRVfX6cDj8uvL7Wt+vmuw3CsjTqvrhauuc91ct/5Om9X63Pzl+r/t/Ql/Ksap+WvGTpPX9qtF+3wy++Nl1d5me2X2/V/V44ajbWS9XfH33+7XZbxSQJ1dcZGTNzO77vbjaFpeZ2f1+bfYbBeTS/yBaYs3M7vtd+h/kS3y34mu736/NfqOAACUgEAkIBAICgYBAICAQCAgEAgKBgEAgIBAICAQCAoGAQCAgEAgIBAICgYBAICAQCAgEo4B8ftQt1s/svt/aZ0BdwvsVX9v9fm32GwXk0xUXGVkzs/t+b6+2xWVmdr9fm/1GAflwxUVG1szsvt+bunmY22M53s5cqvv92uw3CsjHunkc42N5V+ue39p6v9snHL6uxwnJv48e/XPF97S+XzXaz8Orxy718OqXdfNQtzXPrVrifd38teo3D69+kEvsBwAAAAAAAABfmU1/1EQPuftN2HdPuh7yE+43Z1896XrIz3K/ObvqSddDPjfT/RbO3GpPuh7yuZnut3DmVnvS9ZDPzXS/hTM91QQCAYFAQCAQEAgEBAIBgUBAIBAQCAQEAgGBQEAgEBAIBAQCAYFAQCAQEAgEBAIBgUBAINhqT7oe8rmZ7rdw5lZ70vWQz810v4Uzt9qTrod8bqb7LZy5yZ50PeR3uN+cffak6yF3vwl60gEAAAAAAABgtfhREz3a0x9FsN/Ge9yHAdGjfWJ1D3nZ7/822+N+NiB6tM9a3ENe9jtnkz3uo4+769Gem2m/uZlt3n+jgOjRnptpv7mZbd5/o4Do0Z6bab+5mW3ef55qAoGAQCAgEAgIBAICgYBAICAQCAgEAgKBgEAgIBAICAQCAoGAQCAgEAgIBAICgYBAICAQjAKiR3tupv3mZrZ5/40Cokd7bqb95ma2ef+NAqJHe26m/eZmtnn/nQ2IHu07VvWQl/2+tNke9yUPr9ajvdOHQ1fz/Tbw/gMAAAAAAACAr8x9RYlb+CiCHnf3e4hF90sB0aN9O6p22OPufieG9xsFRI/2FyNrRz3u7nfW2fuN/j+IHu1Te+txd7+FM0cB0aM9N9P95ma2ud8oIHq079pTj7v7LZzpqSYQCAgEAgKBgEAgIBAICAQCAoGAQCAgEAgIBAICgYBAICAQCAgEAgKBgEAgIBAICAQCAsEoIHq079pTj7v7LZw5Coge7bmZ7jc3s839RgHRo31qbz3u7rdw5iggerT/s7sed/e7Y3i/PTy8unOPtvvt+H4AAAAAAAAA8PXZ9EdNqvl+esi3//putie9mu+nh/zEZl/fTfakV/P99JCftcnXd6s96d3300M+N7PNflvtSe++nx7yuZlt9ttqT3r3/fSQz81ss5+nmkAgIBAICAQCAoGAQCAgEAgIBAICgYBAICAQCAgEAgKBgEAgIBAICAQCAoGAQCAgEAgIBFvtSe++nx7yuZlt9ttqT3r3/fSQz81ss99We9K776eHfG5mm/022ZNezffTQ37HZl9fD68e00M+Z/evLwAAAPCI/gFIfqYbRE+aDAAAAABJRU5ErkJggg==",
                            "width": 25,
                            "height": 25,
                            "alt": "diamond"
                        },
                        "DIAMOND"
                    ],
                    [
                        {
                            "src": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE7ElEQVR4nO3dMY5TVxQG4OOgNGioSbKAbIAFROwJmog2acieoqRnA1nAAA0VooDCKewospj78+5cP+s+z/e1PM/5da1/zEjWPVUAAADAFHbf+PebqnpaVY+r6vszz/5SVZ+q6n1Vfbznz5BPvvtalC8V5Ieq+unMoVpuq+pd52vk+598Y5r5vmu84KYuF66Os246npfvlHxjmvlaBXm6Xpamnpnyjc2Ub+HMVkEerxikpWemfGMz5Vs4s1WQc/9BtETPTPnGZsq3cGarIEApCEQKAoGCQKAgECgIBAoCgYJAoCAQKAgECgKBgkCgIBAoCAQKAoGCQKAgECgIBAoCQasgXy6aon+mfGMz5Vs4s1WQTysGaemZKd/YTPkWzmwV5P2KQVp6Zso3NlO+hTMfNR7+XFX7qnqyWpxTt1X1oeN5+U7JN6aZz+XVbfKNeQj5AAAAAAAAAOCB8VWTtuF8+/3+l6p6WVXP6rDW+JzeVdWbqnq92+3+uufPmPr8aoJ89qQv051vv9//WlW/rRPndFRVvdrtdr93vm7q86tJ8rUKclNVP68W527/1PLfNFPnO35y/Fnf/oQ+l31VPe/4JJn6/GqifPakrzPzZV2uHHWc9aLj+dnPb5p89qSvM/PZainOM3P285smnz3p68w89x/kS/zY8ezs5zdNPreaQKAgECgIBAoCgYJAoCAQKAgECgKBgkCgIBAoCAQKAoGCQKAgECgIBAoCgYJAoCAQKAgE9qSvM7P3DqhzeNvx7OznN00+e9LXmflmtRTnmTn7+U2Tz570dWa+rsNlbpeyP85cavbzmyZfqyAf63Ad46XcVt/9rVPnO95w+KouU5L/rh79u+M1U59fTZTP5dVt57q8+kUdLnXrubdqibd1+G/VHy6vvhd70gEAAAAAAACg26a/amIPufMbcN170u0hP+H8xlzXnnR7yO/k/MZc1Z50e8jHZjq/hTO3uifdHvKxmc5v4cyt7km3h3xspvNbONOtJhAoCAQKAoGCQKAgECgIBAoCgYJAoCAQKAgECgKBgkCgIBAoCAQKAoGCQKAgECgIBAoCwVb3pNtDPjbT+S2cudU96faQj810fgtnbnVPuj3kYzOd38KZm9yTbg/5V5zfmOvck24PufMbYE86AAAAAAAAAHTb9FdNavJ89pBv//3d7J70mjyfPeQnNvv+bnJPek2ezx7yO23y/d3qnvTZ89lDPjZzmnxb3ZM+ez57yMdmTpNvq3vSZ89nD/nYzGnyudUEAgWBQEEgUBAIFAQCBYFAQSBQEAgUBAIFgUBBIFAQCBQEAgWBQEEgUBAIFAQCBYFAQSDY6p702fPZQz42c5p8W92TPns+e8jHZk6Tb6t70mfPZw/52Mxp8m1yT3pNns8e8q9s9v11eXWbPeRjrv79BQAAAAAAAICHx1dN2uQbcxX57ElfRr4xm83X+jbvTV0uXB1n3XQ8L98p+cY089mTvs5M+cZmTpPPnvR1Zso3NnOafPakrzNTvrGZ0+RzqwkECgKBgkCgIBAoCAQKAoGCQKAgECgIBAoCgYJAoCAQKAgECgKBgkCgIBAoCAQKAoGCQGBP+joz5RubOU0+e9LXmSnf2Mxp8tmTvs5M+cZmTpPvUePhz3XYv/1ktTinbqvqQ8fz8p2Sb0wzn8ur2+Qb8xDyAQAAAJfyL3WaU2vK5kXFAAAAAElFTkSuQmCC",
                            "width": 25,
                            "height": 25,
                            "alt": "small diamond"
                        },
                        "DIAMOND_SMALL"
                    ],
                    [
                        {
                            "src": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFJElEQVR4nO3dQW4UVxAG4OpI2SD2kBwgF8gBRrkTbCy2yYbcBvZRss8FcgAb9ogNkiuLGRtZ7i5187rHr4fv2wamfqT6baGYVxEAAABA/zLzkJnvM/Mm13dz+uyDfPLtLl9mXm0QasxtZl7JJ99u8uWxubdnCngXcnaT5ZPvXPl+mMj4OiKGuX+gFQwR8WrBr5fvIfnaTOabKsiv22WZtGSmfG0z5Zs5c7SlmZnbZhk3DMOsrxryjZOvzVi+qe8gQCgIlBQECgoCBQWBgoJAQUGgoCBQUBAoKAgUFAQKCgIFBYGCgkBBQaCgIFBQECgoCBQUBApTBflw1hRHNwt+rXyPyddmNN9UQf7dMMiUJTPla5sp38yZUwV5GxHnfFkiTzPnku8h+doszXf/9OM5XrdreZpSPvmeJN9dyENmvsvM6w2CXZ8+u/VxY/nke5J8AAAAAAAAAPD9KU9inf43/Os43m97ufLsD3H8Ccq3wzD8/Y2f8TwiXkTEs4j4ca1gJ18i4nNEfIyIT9/4GfI15Oth/yYLkscf4Pp95VCjoyLizTAMfyz8fS8j4ucN8oy5juX/RkG+rxbn62X/po54HiLir6n/voGMiN8WfCd5HhG/bJhnzH8x/yuhfI/NztfT/u31TvqLrYKsNFO+tpnd7N9e76Q/2yzFOjPla5vZzf5NFWTtvxDN8dOCX7v2XyjXnilf28xu9s+rJlBQECgoCBQUBAoKAgUFgYKCQEFBoKAgUFAQKCgIFBQECgoCBQWBgoJAQUGgoCBQUBAoKAgU9non/ctmKdaZKV/bzG72b6930j9vlmKdmfK1zexm//Z6J/3jVkFWmilf28xu9m+0IKcX5t7EeULePf34z4Lf8ymOz1mey3Use19WvocW5etp/+Y8Xv0qjo9qLXm3ao6bOH5b+9Pj1d/k4vPtYP8AAAAAAAAA4DvjTvq0i/9Rjug8Xw/75076PBd3hzw6z9fL/rmTPt/F3CGPzvP1tH/upG8zU762md3snzvp28yUr21mN/vnTvo2M+Vrm9nN/nnVBAoKAgUFgYKCQEFBoKAgUFAQKCgIFBQECgoCBQWBgoJAQUGgoCBQUBAoKAgUFAQKCgIFBYGCO+nbzJSvbWY3++dO+jYz5Wub2c3+uZO+zUz52mZ2s3/upM9zUXfIo/N8Pe2fO+nTLv5x6Og83w72DwAAAAAAAAC+M+6kT7v4H+WIzvP1sH/upM9zcXfIo/N8veyfO+nzXcwd8ug8X0/75076NjPla5vZzf65k77NTPnaZnazf+6kbzNTvraZ3eyfV02goCBQUBAoKAgUFAQKCgIFBYGCgkBBQaCgIFBQECgoCBQUBAoKAgUFgYKCQEFBoKAgUFAQKLiTvs1M+dpmdrN/7qRvM1O+tpnd7J876dvMlK9tZjf75076PBd1hzw6z9fT/rmTPu3iH4eOzvPtYP8AAAAAAAAAgK8y85CZ7zPzJtd3c/rsg3zy7S5fZl5tEGrMbR5vYssn3z7y5bG5t2cKeBdydpPlk+9c+fZ6J12+h+Rrc3F30uVrmynfzJmjLc3Mc/5rrnvDMMz6qiHfOPnajOXzqgkUFAQKCgIFBYGCgkBBQaCgIFBQECgoCBQUBAoKAgUFgYKCQEFBoKAgUFAQKCgIFBQECgoChb3eSZfvMfnaXNSddPnaZso3c+Ze76TL95B8bZbmu3/68Ryv27U8TSmffE+S7y7kITPfZeb1BsGuT5/d+rixfPI9ST4AAADgjP4Hm2pLjkVf1VMAAAAASUVORK5CYII=",
                            "width": 25,
                            "height": 25,
                            "alt": "square"
                        },
                        "SQUARE"
                    ],
                    [
                        {
                            "src": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAACXBIWXMAAAsTAAALEwEAmpwYAAAE6ElEQVR4nO3dP44URxQH4DdGTtAQY3wAX4ADWNwJEkRqEnwny865gA+wQEKECCAYghkbWrP1tmqqe9TV+33p9uz7qbd/+0earRcBAAAArMLujo/vI+JxRDyMiJ9nnv01Ij5HxIeI+HTh55BPvktV5csK8ktE/DpzqJKbiHjf+Br5vpOvTzHfT4UX7ON64eI0a99wvXxT8vUp5isV5PFyWYpaZsrXN1O+ypmlgjxcMEhJy0z5+mbKVzmzVJC5/yCq0TJTvr6Z8lXOLBUECAWBlIJAQkEgoSCQUBBIKAgkFAQSCgIJBYGEgkBCQSChIJBQEEgoCCQUBBIKAgkFgYSCQKJUkK9XTdE+U76+mfJVziwV5POCQUpaZsrXN1O+ypmlgnxYMEhJy0z5+mbKVznzQeHiLxFxiIhHi8WZuomIjw3XyzclX59iPodXl8nX5z7kAwAAAAAAAIB7Zui3mhwOh98j4kVEPI3j2uA5vY+ItxHxZrfb/X3JJ5CvL1+s4Pkbdk/64XB4GRF/LBNnOioiXu12u9dNL5Lv/1FxQb5YyfNXKsg+In5bLM7t/o3KnySn73x/xd0/AedyiIhntd8J5TsfGQ35YkXP36h70l/E9b64cZr1vOF6+aZa863m+Rt1T/rTxVLMM1O+vpmref5G3ZM+9x+UNZ40XCvfuZZ8q3n+nGoCCQWBhIJAQkEgoSCQUBBIKAgkFAQSCgIJBYGEgkBCQSChIJBQEEgoCCQUBBIKAgkFgYSCQGLUPelNZ2jN5F3DtfKda8m3mudv1D3pbxdLMc9M+fpmrub5G3VP+ps4HkZ2LYfTzFryTbXmW83zVyrIpzgex3gtN9FwPu/phL5XcZ0v8n9HZ/5T+wL5JprzxYqevy0cXv08joeStZy7VONdHH8t+LPzcGj5Bj68GgAAAAAAAAD40RbeamLPt/t3CXvSZzL0nu8S92/CnvROw+75vo37dyt70jsMu+e7wP2rnGlP+jIz3b++mau5f/ak1xtyz3eB+1c506kmkFAQSCgIJBQEEgoCCQWBhIJAQkEgoSCQUBBIKAgkFAQSCgIJBYGEgkBCQSChIJBQEEgoCCTsSa835J7vAvevcqY96cvMdP/6Zq7m/tmTXmfYPd8F7l/lTHvS7zb0nu/buH9n7Em/wOb3fLt/9qQDAAAAAAAAQJstvNVktXu+5bMnfS6b2/Mt3/dRYU/6LDaz51u+85FhT3q3Le35lm/KnvQZbGnPt3x9M1fz/NmTXq/l/yXkO2dPOmyNgkBCQSChIJBQEEgoCCQUBBIKAgkFgYSCQEJBIKEgkFAQSCgIJBQEEgoCCQWBhIJAQkEgYU96vZY93/Kdsye905b2fMvXN3M1z5896XVa93zLN2VPeqdN7fmWb8Ke9Attfs+3fPakAwAAAAAAAMC2DP1Wk5BPvstte096yPcj+foU85XezbuP64WL06x9w/XyTcnXp5hv1D3p8vXNlK9y5qh70uXrmylf5cxR96TL1zdTvsqZTjWBhIJAQkEgoSCQUBBIKAgkFAQSCgIJBYGEgkBCQSChIJBQEEgoCCQUBBIKAgkFgYSCQEJBIDHqnnT5+mbKVzlz1D3p8vXNlK9y5qh70uXrmylf5cwHhYu/xHG/9aPF4kzdRMTHhuvlm5KvTzGfw6vL5OtzH/IBAAAA1/IN7YSWk669SX0AAAAASUVORK5CYII=",
                            "width": 25,
                            "height": 25,
                            "alt": "small square"
                        },
                        "SQUARE_SMALL"
                    ]
                ]
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 205,
        "tooltip": "Affiche une configuration au choix sur la carte.",
        "helpUrl": ""
    }
]); // END JSON EXTRACT (Do not delete this comment.)